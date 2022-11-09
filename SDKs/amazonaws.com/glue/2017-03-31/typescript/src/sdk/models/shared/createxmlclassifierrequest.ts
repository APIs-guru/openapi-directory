import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateXmlClassifierRequest
/** 
 * Specifies an XML classifier for <code>CreateClassifier</code> to create.
**/
export class CreateXmlClassifierRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Classification" })
  classification: string;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=RowTag" })
  rowTag?: string;
}
