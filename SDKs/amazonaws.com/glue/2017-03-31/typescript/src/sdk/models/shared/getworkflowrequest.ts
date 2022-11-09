import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetWorkflowRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=IncludeGraph" })
  includeGraph?: boolean;

  @Metadata({ data: "json, name=Name" })
  name: string;
}
