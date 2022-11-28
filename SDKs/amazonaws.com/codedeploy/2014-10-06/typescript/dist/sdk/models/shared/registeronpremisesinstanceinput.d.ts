import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the input of the register on-premises instance operation.
**/
export declare class RegisterOnPremisesInstanceInput extends SpeakeasyBase {
    iamSessionArn?: string;
    iamUserArn?: string;
    instanceName: string;
}
