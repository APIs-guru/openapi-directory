import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateWorkflowRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DefaultRunProperties" })
  defaultRunProperties?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxConcurrentRuns" })
  maxConcurrentRuns?: number;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}
