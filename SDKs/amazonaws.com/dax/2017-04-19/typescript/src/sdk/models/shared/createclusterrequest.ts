import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ClusterEndpointEncryptionTypeEnum } from "./clusterendpointencryptiontypeenum";
import { SseSpecification } from "./ssespecification";
import { Tag } from "./tag";


export class CreateClusterRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AvailabilityZones" })
  availabilityZones?: string[];

  @Metadata({ data: "json, name=ClusterEndpointEncryptionType" })
  clusterEndpointEncryptionType?: ClusterEndpointEncryptionTypeEnum;

  @Metadata({ data: "json, name=ClusterName" })
  clusterName: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=IamRoleArn" })
  iamRoleArn: string;

  @Metadata({ data: "json, name=NodeType" })
  nodeType: string;

  @Metadata({ data: "json, name=NotificationTopicArn" })
  notificationTopicArn?: string;

  @Metadata({ data: "json, name=ParameterGroupName" })
  parameterGroupName?: string;

  @Metadata({ data: "json, name=PreferredMaintenanceWindow" })
  preferredMaintenanceWindow?: string;

  @Metadata({ data: "json, name=ReplicationFactor" })
  replicationFactor: number;

  @Metadata({ data: "json, name=SSESpecification" })
  sseSpecification?: SseSpecification;

  @Metadata({ data: "json, name=SecurityGroupIds" })
  securityGroupIds?: string[];

  @Metadata({ data: "json, name=SubnetGroupName" })
  subnetGroupName?: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
