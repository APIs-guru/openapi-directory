import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CheckSchemaVersionValidityResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Error" })
  error?: string;

  @Metadata({ data: "json, name=Valid" })
  valid?: boolean;
}
