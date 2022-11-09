import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ParameterValue
/** 
 * A value or list of parameter values. 
**/
export class ParameterValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=stringValue" })
  stringValue: string;
}
