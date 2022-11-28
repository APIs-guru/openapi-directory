import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DirectoryNotDisabledException
/** 
 * An operation can only operate on a disabled directory.
**/
export class DirectoryNotDisabledException extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;
}
