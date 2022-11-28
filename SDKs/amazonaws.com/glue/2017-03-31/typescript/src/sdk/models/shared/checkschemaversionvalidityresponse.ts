import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CheckSchemaVersionValidityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=Valid" })
  valid?: boolean;
}
