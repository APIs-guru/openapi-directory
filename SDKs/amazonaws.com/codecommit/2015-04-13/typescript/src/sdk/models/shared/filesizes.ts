import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FileSizes
/** 
 * Information about the size of files in a merge or pull request.
**/
export class FileSizes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=base" })
  base?: number;

  @SpeakeasyMetadata({ data: "json, name=destination" })
  destination?: number;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: number;
}
