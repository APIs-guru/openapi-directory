import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetWorkflowRunRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=IncludeGraph" })
  includeGraph?: boolean;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=RunId" })
  runId: string;
}
