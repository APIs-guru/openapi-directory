import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Builder } from "./builder";
import { PlatformSummary } from "./platformsummary";



export class CreatePlatformVersionResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  builder?: Builder;

  @SpeakeasyMetadata()
  platformSummary?: PlatformSummary;
}
