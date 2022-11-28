import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetBlueprintRunRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BlueprintName" })
  blueprintName: string;

  @SpeakeasyMetadata({ data: "json, name=RunId" })
  runId: string;
}
