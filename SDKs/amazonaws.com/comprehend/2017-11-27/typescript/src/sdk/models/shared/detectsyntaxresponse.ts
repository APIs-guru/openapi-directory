import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SyntaxToken } from "./syntaxtoken";



export class DetectSyntaxResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SyntaxTokens", elemType: SyntaxToken })
  syntaxTokens?: SyntaxToken[];
}
