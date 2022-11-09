import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSchemaVersionsDiffResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Diff" })
  diff?: string;
}
