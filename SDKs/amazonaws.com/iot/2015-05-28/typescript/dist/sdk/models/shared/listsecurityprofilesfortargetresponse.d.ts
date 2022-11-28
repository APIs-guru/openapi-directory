import { SpeakeasyBase } from "../../../internal/utils";
import { SecurityProfileTargetMapping } from "./securityprofiletargetmapping";
export declare class ListSecurityProfilesForTargetResponse extends SpeakeasyBase {
    nextToken?: string;
    securityProfileTargetMappings?: SecurityProfileTargetMapping[];
}
