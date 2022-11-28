import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutWorkflowRunPropertiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=RunId" })
  runId: string;

  @SpeakeasyMetadata({ data: "json, name=RunProperties" })
  runProperties: Map<string, string>;
}
