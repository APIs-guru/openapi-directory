import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CodeGenEdge } from "./codegenedge";
import { CodeGenNode } from "./codegennode";
import { LanguageEnum } from "./languageenum";


export class CreateScriptRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DagEdges", elemType: shared.CodeGenEdge })
  dagEdges?: CodeGenEdge[];

  @Metadata({ data: "json, name=DagNodes", elemType: shared.CodeGenNode })
  dagNodes?: CodeGenNode[];

  @Metadata({ data: "json, name=Language" })
  language?: LanguageEnum;
}
