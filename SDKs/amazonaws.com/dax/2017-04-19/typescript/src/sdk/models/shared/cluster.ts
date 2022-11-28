import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Endpoint } from "./endpoint";
import { ClusterEndpointEncryptionTypeEnum } from "./clusterendpointencryptiontypeenum";
import { Node } from "./node";
import { NotificationConfiguration } from "./notificationconfiguration";
import { ParameterGroupStatus } from "./parametergroupstatus";
import { SseDescription } from "./ssedescription";
import { SecurityGroupMembership } from "./securitygroupmembership";



// Cluster
/** 
 * Contains all of the attributes of a specific DAX cluster.
**/
export class Cluster extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActiveNodes" })
  activeNodes?: number;

  @SpeakeasyMetadata({ data: "json, name=ClusterArn" })
  clusterArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ClusterDiscoveryEndpoint" })
  clusterDiscoveryEndpoint?: Endpoint;

  @SpeakeasyMetadata({ data: "json, name=ClusterEndpointEncryptionType" })
  clusterEndpointEncryptionType?: ClusterEndpointEncryptionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ClusterName" })
  clusterName?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=IamRoleArn" })
  iamRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=NodeIdsToRemove" })
  nodeIdsToRemove?: string[];

  @SpeakeasyMetadata({ data: "json, name=NodeType" })
  nodeType?: string;

  @SpeakeasyMetadata({ data: "json, name=Nodes", elemType: Node })
  nodes?: Node[];

  @SpeakeasyMetadata({ data: "json, name=NotificationConfiguration" })
  notificationConfiguration?: NotificationConfiguration;

  @SpeakeasyMetadata({ data: "json, name=ParameterGroup" })
  parameterGroup?: ParameterGroupStatus;

  @SpeakeasyMetadata({ data: "json, name=PreferredMaintenanceWindow" })
  preferredMaintenanceWindow?: string;

  @SpeakeasyMetadata({ data: "json, name=SSEDescription" })
  sseDescription?: SseDescription;

  @SpeakeasyMetadata({ data: "json, name=SecurityGroups", elemType: SecurityGroupMembership })
  securityGroups?: SecurityGroupMembership[];

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=SubnetGroup" })
  subnetGroup?: string;

  @SpeakeasyMetadata({ data: "json, name=TotalNodes" })
  totalNodes?: number;
}
