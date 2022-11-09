import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DirectoryNotDisabledException
/** 
 * An operation can only operate on a disabled directory.
**/
export class DirectoryNotDisabledException extends SpeakeasyBase {
  @Metadata({ data: "json, name=Message" })
  message?: string;
}
