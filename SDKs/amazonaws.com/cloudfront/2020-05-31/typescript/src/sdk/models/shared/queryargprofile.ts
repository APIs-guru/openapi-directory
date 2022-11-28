import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// QueryArgProfile
/** 
 * Query argument-profile mapping for field-level encryption.
**/
export class QueryArgProfile extends SpeakeasyBase {
  @SpeakeasyMetadata()
  profileId: string;

  @SpeakeasyMetadata()
  queryArg: string;
}
