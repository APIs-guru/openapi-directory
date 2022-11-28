import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResourceNotFoundException
/** 
 * The specified resource could not be found.
**/
export class ResourceNotFoundException extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;
}
