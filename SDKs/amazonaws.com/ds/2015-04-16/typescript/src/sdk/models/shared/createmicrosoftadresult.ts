import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateMicrosoftAdResult
/** 
 * Result of a CreateMicrosoftAD request.
**/
export class CreateMicrosoftAdResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=DirectoryId" })
  directoryId?: string;
}
