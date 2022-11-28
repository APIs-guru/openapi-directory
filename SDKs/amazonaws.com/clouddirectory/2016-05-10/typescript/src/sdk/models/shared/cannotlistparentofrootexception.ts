import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CannotListParentOfRootException
/** 
 * Cannot list the parents of a <a>Directory</a> root.
**/
export class CannotListParentOfRootException extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;
}
