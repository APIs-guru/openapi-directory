import { SpeakeasyBase } from "../../../internal/utils";
import { ActionSubTypeEnum } from "./actionsubtypeenum";
/**
 *  The AWS Systems Manager (SSM) action definition details.
**/
export declare class SsmActionDefinition extends SpeakeasyBase {
    actionSubType: ActionSubTypeEnum;
    instanceIds: string[];
    region: string;
}
