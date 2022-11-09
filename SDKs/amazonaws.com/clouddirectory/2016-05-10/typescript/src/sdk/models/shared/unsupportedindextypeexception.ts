import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UnsupportedIndexTypeException
/** 
 * Indicates that the requested index type is not supported.
**/
export class UnsupportedIndexTypeException extends SpeakeasyBase {
  @Metadata({ data: "json, name=Message" })
  message?: string;
}
