import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { QueryArgProfiles } from "./queryargprofiles";



// QueryArgProfileConfig
/** 
 * Configuration for query argument-profile mapping for field-level encryption.
**/
export class QueryArgProfileConfig extends SpeakeasyBase {
  @SpeakeasyMetadata()
  forwardWhenQueryArgProfileIsUnknown: boolean;

  @SpeakeasyMetadata()
  queryArgProfiles?: QueryArgProfiles;
}
