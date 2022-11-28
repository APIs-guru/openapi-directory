import { SpeakeasyBase } from "../../../internal/utils";
import { SecurityProfileIdentifier } from "./securityprofileidentifier";
export declare class ListSecurityProfilesResponse extends SpeakeasyBase {
    nextToken?: string;
    securityProfileIdentifiers?: SecurityProfileIdentifier[];
}
