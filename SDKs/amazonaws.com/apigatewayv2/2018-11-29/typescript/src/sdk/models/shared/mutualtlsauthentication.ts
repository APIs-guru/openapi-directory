import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MutualTlsAuthentication extends SpeakeasyBase {
  @Metadata({ data: "json, name=TruststoreUri" })
  truststoreUri?: string;

  @Metadata({ data: "json, name=TruststoreVersion" })
  truststoreVersion?: string;

  @Metadata({ data: "json, name=TruststoreWarnings" })
  truststoreWarnings?: string[];
}
