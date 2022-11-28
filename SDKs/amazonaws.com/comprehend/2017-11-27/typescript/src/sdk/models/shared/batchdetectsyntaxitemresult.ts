import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SyntaxToken } from "./syntaxtoken";



// BatchDetectSyntaxItemResult
/** 
 * The result of calling the operation. The operation returns one object that is successfully processed by the operation.
**/
export class BatchDetectSyntaxItemResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=SyntaxTokens", elemType: SyntaxToken })
  syntaxTokens?: SyntaxToken[];
}
