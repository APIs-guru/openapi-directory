import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TlsConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=insecureSkipVerification" })
  insecureSkipVerification?: boolean;
}
