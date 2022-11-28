import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FieldTypeDetails } from "./fieldtypedetails";



// SupportedFieldTypeDetails
/** 
 *  Contains details regarding all the supported <code>FieldTypes</code> and their corresponding <code>filterOperators</code> and <code>supportedValues</code>. 
**/
export class SupportedFieldTypeDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=v1" })
  v1: FieldTypeDetails;
}
