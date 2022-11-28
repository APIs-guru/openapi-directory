import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DocumentClass
/** 
 * Specifies the class that categorizes the document being analyzed
**/
export class DocumentClass extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Score" })
  score?: number;
}
