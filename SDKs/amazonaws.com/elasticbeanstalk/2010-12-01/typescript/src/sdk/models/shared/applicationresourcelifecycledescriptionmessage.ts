import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApplicationResourceLifecycleConfig } from "./applicationresourcelifecycleconfig";



export class ApplicationResourceLifecycleDescriptionMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  applicationName?: string;

  @SpeakeasyMetadata()
  resourceLifecycleConfig?: ApplicationResourceLifecycleConfig;
}
