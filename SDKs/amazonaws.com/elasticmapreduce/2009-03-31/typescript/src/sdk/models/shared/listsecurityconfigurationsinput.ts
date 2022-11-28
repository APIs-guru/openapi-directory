import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListSecurityConfigurationsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Marker" })
  marker?: string;
}
