import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetWorkflowRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IncludeGraph" })
  includeGraph?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
