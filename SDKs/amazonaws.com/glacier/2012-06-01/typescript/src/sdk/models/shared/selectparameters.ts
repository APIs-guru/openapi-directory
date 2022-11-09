import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ExpressionTypeEnum } from "./expressiontypeenum";
import { InputSerialization } from "./inputserialization";
import { OutputSerialization } from "./outputserialization";


// SelectParameters
/** 
 * Contains information about the parameters used for a select.
**/
export class SelectParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=Expression" })
  expression?: string;

  @Metadata({ data: "json, name=ExpressionType" })
  expressionType?: ExpressionTypeEnum;

  @Metadata({ data: "json, name=InputSerialization" })
  inputSerialization?: InputSerialization;

  @Metadata({ data: "json, name=OutputSerialization" })
  outputSerialization?: OutputSerialization;
}
