import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=ActiveNodes" })
  activeNodes?: number;

  @Metadata({ data: "json, name=ClusterArn" })
  clusterArn?: string;

  @Metadata({ data: "json, name=ClusterDiscoveryEndpoint" })
  clusterDiscoveryEndpoint?: Endpoint;

  @Metadata({ data: "json, name=ClusterEndpointEncryptionType" })
  clusterEndpointEncryptionType?: ClusterEndpointEncryptionTypeEnum;

  @Metadata({ data: "json, name=ClusterName" })
  clusterName?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=IamRoleArn" })
  iamRoleArn?: string;

  @Metadata({ data: "json, name=NodeIdsToRemove" })
  nodeIdsToRemove?: string[];

  @Metadata({ data: "json, name=NodeType" })
  nodeType?: string;

  @Metadata({ data: "json, name=Nodes", elemType: shared.Node })
  nodes?: Node[];

  @Metadata({ data: "json, name=NotificationConfiguration" })
  notificationConfiguration?: NotificationConfiguration;

  @Metadata({ data: "json, name=ParameterGroup" })
  parameterGroup?: ParameterGroupStatus;

  @Metadata({ data: "json, name=PreferredMaintenanceWindow" })
  preferredMaintenanceWindow?: string;

  @Metadata({ data: "json, name=SSEDescription" })
  sseDescription?: SseDescription;

  @Metadata({ data: "json, name=SecurityGroups", elemType: shared.SecurityGroupMembership })
  securityGroups?: SecurityGroupMembership[];

  @Metadata({ data: "json, name=Status" })
  status?: string;

  @Metadata({ data: "json, name=SubnetGroup" })
  subnetGroup?: string;

  @Metadata({ data: "json, name=TotalNodes" })
  totalNodes?: number;
}
