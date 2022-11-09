import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DocumentLabel
/** 
 * Specifies one of the label or labels that categorize the document being analyzed.
**/
export class DocumentLabel extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Score" })
  score?: number;
}
