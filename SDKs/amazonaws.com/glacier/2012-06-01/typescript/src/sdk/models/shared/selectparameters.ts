import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExpressionTypeEnum } from "./expressiontypeenum";
import { InputSerialization } from "./inputserialization";
import { OutputSerialization } from "./outputserialization";



// SelectParameters
/** 
 * Contains information about the parameters used for a select.
**/
export class SelectParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Expression" })
  expression?: string;

  @SpeakeasyMetadata({ data: "json, name=ExpressionType" })
  expressionType?: ExpressionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=InputSerialization" })
  inputSerialization?: InputSerialization;

  @SpeakeasyMetadata({ data: "json, name=OutputSerialization" })
  outputSerialization?: OutputSerialization;
}
