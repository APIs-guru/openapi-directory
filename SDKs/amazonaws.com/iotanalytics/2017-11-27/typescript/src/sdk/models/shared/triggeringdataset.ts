import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TriggeringDataset
/** 
 * Information about the dataset whose content generation triggers the new dataset content generation.
**/
export class TriggeringDataset extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
