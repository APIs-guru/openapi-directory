import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SamlConfigurationPropertyItemsArray extends SpeakeasyBase {
  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  isSet?: boolean;

  @SpeakeasyMetadata()
  name?: string;

  @SpeakeasyMetadata()
  optional?: boolean;

  @SpeakeasyMetadata()
  type?: number;

  @SpeakeasyMetadata()
  values?: string[];
}
