import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UpdateXmlClassifierRequest
/** 
 * Specifies an XML classifier to be updated.
**/
export class UpdateXmlClassifierRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Classification" })
  classification?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=RowTag" })
  rowTag?: string;
}
