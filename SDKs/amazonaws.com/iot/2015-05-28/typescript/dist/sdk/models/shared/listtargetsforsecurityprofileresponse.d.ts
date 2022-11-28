import { SpeakeasyBase } from "../../../internal/utils";
import { SecurityProfileTarget } from "./securityprofiletarget";
export declare class ListTargetsForSecurityProfileResponse extends SpeakeasyBase {
    nextToken?: string;
    securityProfileTargets?: SecurityProfileTarget[];
}
