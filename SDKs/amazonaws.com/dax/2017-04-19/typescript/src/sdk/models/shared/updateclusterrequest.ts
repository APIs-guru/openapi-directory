import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateClusterRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClusterName" })
  clusterName: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=NotificationTopicArn" })
  notificationTopicArn?: string;

  @Metadata({ data: "json, name=NotificationTopicStatus" })
  notificationTopicStatus?: string;

  @Metadata({ data: "json, name=ParameterGroupName" })
  parameterGroupName?: string;

  @Metadata({ data: "json, name=PreferredMaintenanceWindow" })
  preferredMaintenanceWindow?: string;

  @Metadata({ data: "json, name=SecurityGroupIds" })
  securityGroupIds?: string[];
}
