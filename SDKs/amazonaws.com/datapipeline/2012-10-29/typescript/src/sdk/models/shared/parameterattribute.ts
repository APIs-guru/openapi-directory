import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ParameterAttribute
/** 
 * The attributes allowed or specified with a parameter object.
**/
export class ParameterAttribute extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key: string;

  @Metadata({ data: "json, name=stringValue" })
  stringValue: string;
}
