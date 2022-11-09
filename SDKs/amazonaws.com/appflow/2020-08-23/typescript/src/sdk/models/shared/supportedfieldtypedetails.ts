import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FieldTypeDetails } from "./fieldtypedetails";


// SupportedFieldTypeDetails
/** 
 *  Contains details regarding all the supported <code>FieldTypes</code> and their corresponding <code>filterOperators</code> and <code>supportedValues</code>. 
**/
export class SupportedFieldTypeDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=v1" })
  v1: FieldTypeDetails;
}
