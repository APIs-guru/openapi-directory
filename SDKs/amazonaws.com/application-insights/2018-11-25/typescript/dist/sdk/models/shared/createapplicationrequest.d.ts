import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Tag } from "./tag";
export declare class CreateApplicationRequest extends SpeakeasyBase {
    cweMonitorEnabled?: boolean;
    opsCenterEnabled?: boolean;
    opsItemSnsTopicArn?: string;
    resourceGroupName: string;
    tags?: Tag[];
}
