import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ParameterAttribute } from "./parameterattribute";


// ParameterObject
/** 
 * Contains information about a parameter object.
**/
export class ParameterObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes", elemType: shared.ParameterAttribute })
  attributes: ParameterAttribute[];

  @Metadata({ data: "json, name=id" })
  id: string;
}
