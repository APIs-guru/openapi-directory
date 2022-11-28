import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateXmlClassifierRequest
/** 
 * Specifies an XML classifier for <code>CreateClassifier</code> to create.
**/
export class CreateXmlClassifierRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Classification" })
  classification: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=RowTag" })
  rowTag?: string;
}
