import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BatchGetWorkflowsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IncludeGraph" })
  includeGraph?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Names" })
  names: string[];
}
