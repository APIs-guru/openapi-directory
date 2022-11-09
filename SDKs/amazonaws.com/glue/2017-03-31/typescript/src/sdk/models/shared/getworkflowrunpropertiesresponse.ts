import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetWorkflowRunPropertiesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=RunProperties" })
  runProperties?: Map<string, string>;
}
