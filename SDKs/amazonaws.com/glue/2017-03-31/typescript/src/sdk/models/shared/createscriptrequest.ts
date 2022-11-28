import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodeGenEdge } from "./codegenedge";
import { CodeGenNode } from "./codegennode";
import { LanguageEnum } from "./languageenum";



export class CreateScriptRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DagEdges", elemType: CodeGenEdge })
  dagEdges?: CodeGenEdge[];

  @SpeakeasyMetadata({ data: "json, name=DagNodes", elemType: CodeGenNode })
  dagNodes?: CodeGenNode[];

  @SpeakeasyMetadata({ data: "json, name=Language" })
  language?: LanguageEnum;
}
