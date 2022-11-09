import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BlueprintRun } from "./blueprintrun";


export class GetBlueprintRunsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=BlueprintRuns", elemType: shared.BlueprintRun })
  blueprintRuns?: BlueprintRun[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
