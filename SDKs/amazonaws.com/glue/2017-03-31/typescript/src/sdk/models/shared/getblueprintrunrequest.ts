import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetBlueprintRunRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=BlueprintName" })
  blueprintName: string;

  @Metadata({ data: "json, name=RunId" })
  runId: string;
}
