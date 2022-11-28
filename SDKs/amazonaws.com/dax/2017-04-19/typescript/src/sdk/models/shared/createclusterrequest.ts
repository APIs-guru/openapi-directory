import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClusterEndpointEncryptionTypeEnum } from "./clusterendpointencryptiontypeenum";
import { SseSpecification } from "./ssespecification";
import { Tag } from "./tag";



export class CreateClusterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AvailabilityZones" })
  availabilityZones?: string[];

  @SpeakeasyMetadata({ data: "json, name=ClusterEndpointEncryptionType" })
  clusterEndpointEncryptionType?: ClusterEndpointEncryptionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ClusterName" })
  clusterName: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=IamRoleArn" })
  iamRoleArn: string;

  @SpeakeasyMetadata({ data: "json, name=NodeType" })
  nodeType: string;

  @SpeakeasyMetadata({ data: "json, name=NotificationTopicArn" })
  notificationTopicArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ParameterGroupName" })
  parameterGroupName?: string;

  @SpeakeasyMetadata({ data: "json, name=PreferredMaintenanceWindow" })
  preferredMaintenanceWindow?: string;

  @SpeakeasyMetadata({ data: "json, name=ReplicationFactor" })
  replicationFactor: number;

  @SpeakeasyMetadata({ data: "json, name=SSESpecification" })
  sseSpecification?: SseSpecification;

  @SpeakeasyMetadata({ data: "json, name=SecurityGroupIds" })
  securityGroupIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=SubnetGroupName" })
  subnetGroupName?: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
