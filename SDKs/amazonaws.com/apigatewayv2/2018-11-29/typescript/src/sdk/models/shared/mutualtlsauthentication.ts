import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MutualTlsAuthentication extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TruststoreUri" })
  truststoreUri?: string;

  @SpeakeasyMetadata({ data: "json, name=TruststoreVersion" })
  truststoreVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=TruststoreWarnings" })
  truststoreWarnings?: string[];
}
