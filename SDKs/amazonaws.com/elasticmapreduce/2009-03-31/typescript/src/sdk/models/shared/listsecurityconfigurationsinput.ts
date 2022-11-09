import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListSecurityConfigurationsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Marker" })
  marker?: string;
}
