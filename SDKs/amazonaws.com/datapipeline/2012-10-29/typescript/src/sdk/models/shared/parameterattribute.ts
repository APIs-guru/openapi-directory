import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ParameterAttribute
/** 
 * The attributes allowed or specified with a parameter object.
**/
export class ParameterAttribute extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=stringValue" })
  stringValue: string;
}
