import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceValue } from "./resourcevalue";
import { StaticValue } from "./staticvalue";


// RemediationParameterValue
/** 
 * The value is either a dynamic (resource) value or a static value. You must select either a dynamic value or a static value.
**/
export class RemediationParameterValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceValue" })
  resourceValue?: ResourceValue;

  @Metadata({ data: "json, name=StaticValue" })
  staticValue?: StaticValue;
}
