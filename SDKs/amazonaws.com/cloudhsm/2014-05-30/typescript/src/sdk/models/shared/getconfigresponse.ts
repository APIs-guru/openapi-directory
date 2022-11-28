import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConfigCred" })
  configCred?: string;

  @SpeakeasyMetadata({ data: "json, name=ConfigFile" })
  configFile?: string;

  @SpeakeasyMetadata({ data: "json, name=ConfigType" })
  configType?: string;
}
