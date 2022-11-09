import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class UpdateClusterRequest extends SpeakeasyBase {
    clusterName: string;
    description?: string;
    notificationTopicArn?: string;
    notificationTopicStatus?: string;
    parameterGroupName?: string;
    preferredMaintenanceWindow?: string;
    securityGroupIds?: string[];
}
