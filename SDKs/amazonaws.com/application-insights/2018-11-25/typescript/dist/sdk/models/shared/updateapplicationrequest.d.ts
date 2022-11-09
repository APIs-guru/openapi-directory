import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class UpdateApplicationRequest extends SpeakeasyBase {
    cweMonitorEnabled?: boolean;
    opsCenterEnabled?: boolean;
    opsItemSnsTopicArn?: string;
    removeSnsTopic?: boolean;
    resourceGroupName: string;
}
