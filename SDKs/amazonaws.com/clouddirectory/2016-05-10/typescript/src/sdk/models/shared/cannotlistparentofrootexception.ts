import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CannotListParentOfRootException
/** 
 * Cannot list the parents of a <a>Directory</a> root.
**/
export class CannotListParentOfRootException extends SpeakeasyBase {
  @Metadata({ data: "json, name=Message" })
  message?: string;
}
