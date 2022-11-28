import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DirectoryNotEnabledException
/** 
 * Operations are only permitted on enabled directories.
**/
export class DirectoryNotEnabledException extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;
}
