import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetWorkflowRunPropertiesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=RunId" })
  runId: string;
}
