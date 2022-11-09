import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateWorkflowRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DefaultRunProperties" })
  defaultRunProperties?: Map<string, string>;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=MaxConcurrentRuns" })
  maxConcurrentRuns?: number;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}
