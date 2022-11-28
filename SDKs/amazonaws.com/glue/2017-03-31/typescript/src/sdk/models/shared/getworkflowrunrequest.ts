import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetWorkflowRunRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IncludeGraph" })
  includeGraph?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=RunId" })
  runId: string;
}
