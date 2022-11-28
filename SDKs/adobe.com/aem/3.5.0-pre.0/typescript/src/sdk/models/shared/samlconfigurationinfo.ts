import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SamlConfigurationProperties } from "./samlconfigurationproperties";



export class SamlConfigurationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bundleLocation?: string;

  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  pid?: string;

  @SpeakeasyMetadata()
  properties?: SamlConfigurationProperties;

  @SpeakeasyMetadata()
  serviceLocation?: string;

  @SpeakeasyMetadata()
  title?: string;
}
