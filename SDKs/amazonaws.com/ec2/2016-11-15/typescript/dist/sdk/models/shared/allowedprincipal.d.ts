import { SpeakeasyBase } from "../../../internal/utils";
import { PrincipalTypeEnum } from "./principaltypeenum";
/**
 * Describes a principal.
**/
export declare class AllowedPrincipal extends SpeakeasyBase {
    principal?: string;
    principalType?: PrincipalTypeEnum;
}
