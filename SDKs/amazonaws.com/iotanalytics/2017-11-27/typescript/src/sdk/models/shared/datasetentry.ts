import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DatasetEntry
/** 
 * The reference to a dataset entry.
**/
export class DatasetEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataURI" })
  dataUri?: string;

  @SpeakeasyMetadata({ data: "json, name=entryName" })
  entryName?: string;
}
