import { SpeakeasyBase } from "../../../internal/utils";
import { PolicyOwnerEntityTypeEnum } from "./policyownerentitytypeenum";
/**
 * <p>Contains details about the specified entity (user or role).</p> <p>This data type is an element of the <a>EntityDetails</a> object.</p>
**/
export declare class EntityInfo extends SpeakeasyBase {
    arn: string;
    id: string;
    name: string;
    path?: string;
    type: PolicyOwnerEntityTypeEnum;
}
