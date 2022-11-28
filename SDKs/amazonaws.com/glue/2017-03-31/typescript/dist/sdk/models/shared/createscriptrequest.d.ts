import { SpeakeasyBase } from "../../../internal/utils";
import { CodeGenEdge } from "./codegenedge";
import { CodeGenNode } from "./codegennode";
import { LanguageEnum } from "./languageenum";
export declare class CreateScriptRequest extends SpeakeasyBase {
    dagEdges?: CodeGenEdge[];
    dagNodes?: CodeGenNode[];
    language?: LanguageEnum;
}
