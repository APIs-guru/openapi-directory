import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BatchGetWorkflowsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=IncludeGraph" })
  includeGraph?: boolean;

  @Metadata({ data: "json, name=Names" })
  names: string[];
}
