import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetConsoleScreenshotResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  imageData?: string;

  @SpeakeasyMetadata()
  instanceId?: string;
}
