import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ExpressionTypeEnum } from "./expressiontypeenum";
import { InputSerialization } from "./inputserialization";
import { OutputSerialization } from "./outputserialization";
/**
 * Contains information about the parameters used for a select.
**/
export declare class SelectParameters extends SpeakeasyBase {
    expression?: string;
    expressionType?: ExpressionTypeEnum;
    inputSerialization?: InputSerialization;
    outputSerialization?: OutputSerialization;
}
