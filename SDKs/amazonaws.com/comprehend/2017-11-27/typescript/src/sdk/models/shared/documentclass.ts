import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DocumentClass
/** 
 * Specifies the class that categorizes the document being analyzed
**/
export class DocumentClass extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Score" })
  score?: number;
}
