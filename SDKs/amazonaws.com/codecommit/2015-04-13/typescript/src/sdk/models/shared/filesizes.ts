import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FileSizes
/** 
 * Information about the size of files in a merge or pull request.
**/
export class FileSizes extends SpeakeasyBase {
  @Metadata({ data: "json, name=base" })
  base?: number;

  @Metadata({ data: "json, name=destination" })
  destination?: number;

  @Metadata({ data: "json, name=source" })
  source?: number;
}
