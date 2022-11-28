import { SpeakeasyBase } from "../../../internal/utils";
import { CustomDomainConfigType } from "./customdomainconfigtype";
/**
 * The UpdateUserPoolDomain request input.
**/
export declare class UpdateUserPoolDomainRequest extends SpeakeasyBase {
    customDomainConfig: CustomDomainConfigType;
    domain: string;
    userPoolId: string;
}
