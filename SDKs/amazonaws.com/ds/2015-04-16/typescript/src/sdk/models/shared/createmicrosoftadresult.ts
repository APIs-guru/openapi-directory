import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateMicrosoftAdResult
/** 
 * Result of a CreateMicrosoftAD request.
**/
export class CreateMicrosoftAdResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DirectoryId" })
  directoryId?: string;
}
