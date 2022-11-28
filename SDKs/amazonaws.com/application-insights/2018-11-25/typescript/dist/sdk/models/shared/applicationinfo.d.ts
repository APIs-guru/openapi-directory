import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the status of the application.
**/
export declare class ApplicationInfo extends SpeakeasyBase {
    cweMonitorEnabled?: boolean;
    lifeCycle?: string;
    opsCenterEnabled?: boolean;
    opsItemSnsTopicArn?: string;
    remarks?: string;
    resourceGroupName?: string;
}
