import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SyntaxToken } from "./syntaxtoken";


// BatchDetectSyntaxItemResult
/** 
 * The result of calling the operation. The operation returns one object that is successfully processed by the operation.
**/
export class BatchDetectSyntaxItemResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Index" })
  index?: number;

  @Metadata({ data: "json, name=SyntaxTokens", elemType: shared.SyntaxToken })
  syntaxTokens?: SyntaxToken[];
}
