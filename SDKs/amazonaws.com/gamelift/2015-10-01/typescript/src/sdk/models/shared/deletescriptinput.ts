import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteScriptInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ScriptId" })
  scriptId: string;
}
