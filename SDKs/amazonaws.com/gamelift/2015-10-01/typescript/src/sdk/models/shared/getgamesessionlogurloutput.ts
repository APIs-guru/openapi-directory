import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetGameSessionLogUrlOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class GetGameSessionLogUrlOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PreSignedUrl" })
  preSignedUrl?: string;
}
