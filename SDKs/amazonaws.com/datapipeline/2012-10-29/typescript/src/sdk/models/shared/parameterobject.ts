import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ParameterAttribute } from "./parameterattribute";



// ParameterObject
/** 
 * Contains information about a parameter object.
**/
export class ParameterObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes", elemType: ParameterAttribute })
  attributes: ParameterAttribute[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}
