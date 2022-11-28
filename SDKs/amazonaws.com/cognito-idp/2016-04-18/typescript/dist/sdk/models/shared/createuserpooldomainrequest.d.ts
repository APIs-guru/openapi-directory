import { SpeakeasyBase } from "../../../internal/utils";
import { CustomDomainConfigType } from "./customdomainconfigtype";
export declare class CreateUserPoolDomainRequest extends SpeakeasyBase {
    customDomainConfig?: CustomDomainConfigType;
    domain: string;
    userPoolId: string;
}
