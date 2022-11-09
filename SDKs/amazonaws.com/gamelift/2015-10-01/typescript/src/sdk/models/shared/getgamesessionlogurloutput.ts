import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetGameSessionLogUrlOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class GetGameSessionLogUrlOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=PreSignedUrl" })
  preSignedUrl?: string;
}
