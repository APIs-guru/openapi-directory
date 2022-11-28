import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { QueryArgProfile } from "./queryargprofile";



// QueryArgProfiles
/** 
 * Query argument-profile mapping for field-level encryption.
**/
export class QueryArgProfiles extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: QueryArgProfile })
  items?: QueryArgProfile[];

  @SpeakeasyMetadata()
  quantity: number;
}
