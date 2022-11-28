import { SpeakeasyBase } from "../../../internal/utils";
import { EnableHybridValuesEnum } from "./enablehybridvaluesenum";
import { ExistConditionEnum } from "./existconditionenum";
export declare class PutResourcePolicyRequest extends SpeakeasyBase {
    enableHybrid?: EnableHybridValuesEnum;
    policyExistsCondition?: ExistConditionEnum;
    policyHashCondition?: string;
    policyInJson: string;
    resourceArn?: string;
}
