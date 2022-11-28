import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DocumentLabel
/** 
 * Specifies one of the label or labels that categorize the document being analyzed.
**/
export class DocumentLabel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Score" })
  score?: number;
}
