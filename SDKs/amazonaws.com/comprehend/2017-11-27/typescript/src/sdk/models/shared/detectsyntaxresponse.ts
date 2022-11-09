import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SyntaxToken } from "./syntaxtoken";


export class DetectSyntaxResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=SyntaxTokens", elemType: shared.SyntaxToken })
  syntaxTokens?: SyntaxToken[];
}
