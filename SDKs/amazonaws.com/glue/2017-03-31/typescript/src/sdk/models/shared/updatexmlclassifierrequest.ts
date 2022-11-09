import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UpdateXmlClassifierRequest
/** 
 * Specifies an XML classifier to be updated.
**/
export class UpdateXmlClassifierRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Classification" })
  classification?: string;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=RowTag" })
  rowTag?: string;
}
