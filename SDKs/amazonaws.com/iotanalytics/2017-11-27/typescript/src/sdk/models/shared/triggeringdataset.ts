import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TriggeringDataset
/** 
 * Information about the dataset whose content generation triggers the new dataset content generation.
**/
export class TriggeringDataset extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;
}
