import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeScriptInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ScriptId" })
  scriptId: string;
}
