import { SpeakeasyBase } from "../../../internal/utils/utils";
import { SyntaxToken } from "./syntaxtoken";
/**
 * The result of calling the operation. The operation returns one object that is successfully processed by the operation.
**/
export declare class BatchDetectSyntaxItemResult extends SpeakeasyBase {
    index?: number;
    syntaxTokens?: SyntaxToken[];
}
