import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSchemaVersionsDiffResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Diff" })
  diff?: string;
}
