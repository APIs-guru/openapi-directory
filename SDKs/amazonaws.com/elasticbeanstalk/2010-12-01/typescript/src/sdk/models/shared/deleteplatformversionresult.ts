import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PlatformSummary } from "./platformsummary";



export class DeletePlatformVersionResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  platformSummary?: PlatformSummary;
}
