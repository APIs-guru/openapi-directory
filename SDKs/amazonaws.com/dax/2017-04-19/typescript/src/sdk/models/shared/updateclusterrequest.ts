import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateClusterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClusterName" })
  clusterName: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=NotificationTopicArn" })
  notificationTopicArn?: string;

  @SpeakeasyMetadata({ data: "json, name=NotificationTopicStatus" })
  notificationTopicStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=ParameterGroupName" })
  parameterGroupName?: string;

  @SpeakeasyMetadata({ data: "json, name=PreferredMaintenanceWindow" })
  preferredMaintenanceWindow?: string;

  @SpeakeasyMetadata({ data: "json, name=SecurityGroupIds" })
  securityGroupIds?: string[];
}
