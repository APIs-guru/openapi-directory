import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetWorkflowRunPropertiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=RunId" })
  runId: string;
}
