import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BundleTaskError } from "./bundletaskerror";
import { BundleTaskStateEnum } from "./bundletaskstateenum";
import { Storage } from "./storage";



// BundleTask
/** 
 * Describes a bundle task.
**/
export class BundleTask extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bundleId?: string;

  @SpeakeasyMetadata()
  bundleTaskError?: BundleTaskError;

  @SpeakeasyMetadata()
  instanceId?: string;

  @SpeakeasyMetadata()
  progress?: string;

  @SpeakeasyMetadata()
  startTime?: Date;

  @SpeakeasyMetadata()
  state?: BundleTaskStateEnum;

  @SpeakeasyMetadata()
  storage?: Storage;

  @SpeakeasyMetadata()
  updateTime?: Date;
}
