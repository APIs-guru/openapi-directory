import { SpeakeasyBase } from "../../../internal/utils";
import { CidrAuthorizationContext } from "./cidrauthorizationcontext";
export declare class ProvisionByoipCidrRequest extends SpeakeasyBase {
    cidr: string;
    cidrAuthorizationContext: CidrAuthorizationContext;
}
