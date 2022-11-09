import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutWorkflowRunPropertiesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=RunId" })
  runId: string;

  @Metadata({ data: "json, name=RunProperties" })
  runProperties: Map<string, string>;
}
