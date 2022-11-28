import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TlsConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=insecureSkipVerification" })
  insecureSkipVerification?: boolean;
}
