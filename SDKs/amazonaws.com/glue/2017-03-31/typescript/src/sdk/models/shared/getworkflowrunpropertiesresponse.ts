import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetWorkflowRunPropertiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RunProperties" })
  runProperties?: Map<string, string>;
}
