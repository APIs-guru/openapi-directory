import { SpeakeasyBase } from "../../../internal/utils";
import { RemediationExceptionResourceKey } from "./remediationexceptionresourcekey";
export declare class PutRemediationExceptionsRequest extends SpeakeasyBase {
    configRuleName: string;
    expirationTime?: Date;
    message?: string;
    resourceKeys: RemediationExceptionResourceKey[];
}
