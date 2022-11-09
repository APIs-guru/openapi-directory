import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ResourceNotFoundException
/** 
 * The specified resource could not be found.
**/
export class ResourceNotFoundException extends SpeakeasyBase {
  @Metadata({ data: "json, name=Message" })
  message?: string;
}
