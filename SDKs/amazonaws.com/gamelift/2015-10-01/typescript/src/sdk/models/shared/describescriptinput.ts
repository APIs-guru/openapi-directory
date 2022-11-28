import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeScriptInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ScriptId" })
  scriptId: string;
}
