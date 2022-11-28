import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UnsupportedIndexTypeException
/** 
 * Indicates that the requested index type is not supported.
**/
export class UnsupportedIndexTypeException extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;
}
