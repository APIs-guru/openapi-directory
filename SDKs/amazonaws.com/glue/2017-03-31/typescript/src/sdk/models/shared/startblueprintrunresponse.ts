import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartBlueprintRunResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RunId" })
  runId?: string;
}
