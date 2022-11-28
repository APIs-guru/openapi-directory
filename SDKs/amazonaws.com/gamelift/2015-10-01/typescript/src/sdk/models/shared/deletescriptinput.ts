import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteScriptInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ScriptId" })
  scriptId: string;
}
