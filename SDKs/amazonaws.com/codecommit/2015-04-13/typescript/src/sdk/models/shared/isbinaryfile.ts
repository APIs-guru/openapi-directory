import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IsBinaryFile
/** 
 * Information about whether a file is binary or textual in a merge or pull request operation.
**/
export class IsBinaryFile extends SpeakeasyBase {
  @Metadata({ data: "json, name=base" })
  base?: boolean;

  @Metadata({ data: "json, name=destination" })
  destination?: boolean;

  @Metadata({ data: "json, name=source" })
  source?: boolean;
}
