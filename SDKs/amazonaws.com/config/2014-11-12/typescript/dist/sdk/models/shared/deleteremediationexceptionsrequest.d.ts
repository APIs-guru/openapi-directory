import { SpeakeasyBase } from "../../../internal/utils";
import { RemediationExceptionResourceKey } from "./remediationexceptionresourcekey";
export declare class DeleteRemediationExceptionsRequest extends SpeakeasyBase {
    configRuleName: string;
    resourceKeys: RemediationExceptionResourceKey[];
}
