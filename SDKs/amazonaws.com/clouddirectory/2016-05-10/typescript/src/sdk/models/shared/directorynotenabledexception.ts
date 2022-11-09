import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DirectoryNotEnabledException
/** 
 * Operations are only permitted on enabled directories.
**/
export class DirectoryNotEnabledException extends SpeakeasyBase {
  @Metadata({ data: "json, name=Message" })
  message?: string;
}
