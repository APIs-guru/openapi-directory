import { SpeakeasyBase } from "../../../internal/utils";
import { QueryArgProfiles } from "./queryargprofiles";
/**
 * Configuration for query argument-profile mapping for field-level encryption.
**/
export declare class QueryArgProfileConfig extends SpeakeasyBase {
    forwardWhenQueryArgProfileIsUnknown: boolean;
    queryArgProfiles?: QueryArgProfiles;
}
