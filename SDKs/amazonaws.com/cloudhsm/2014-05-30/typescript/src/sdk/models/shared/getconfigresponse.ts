import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetConfigResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConfigCred" })
  configCred?: string;

  @Metadata({ data: "json, name=ConfigFile" })
  configFile?: string;

  @Metadata({ data: "json, name=ConfigType" })
  configType?: string;
}
