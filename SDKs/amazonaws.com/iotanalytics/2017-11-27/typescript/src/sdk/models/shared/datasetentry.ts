import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DatasetEntry
/** 
 * The reference to a dataset entry.
**/
export class DatasetEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataURI" })
  dataUri?: string;

  @Metadata({ data: "json, name=entryName" })
  entryName?: string;
}
