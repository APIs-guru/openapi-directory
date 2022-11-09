import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RoleTypeEnum } from "./roletypeenum";
/**
 *  A collection of attributes used to create a delegation for an assessment in Audit Manager.
**/
export declare class CreateDelegationRequest extends SpeakeasyBase {
    comment?: string;
    controlSetId?: string;
    roleArn?: string;
    roleType?: RoleTypeEnum;
}
