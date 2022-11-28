import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PlatformDescription } from "./platformdescription";



export class DescribePlatformVersionResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  platformDescription?: PlatformDescription;
}
