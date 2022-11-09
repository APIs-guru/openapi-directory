import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StartBlueprintRunResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=RunId" })
  runId?: string;
}
