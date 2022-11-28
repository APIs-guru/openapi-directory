import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BundleTask } from "./bundletask";



// CancelBundleTaskResult
/** 
 * Contains the output of CancelBundleTask.
**/
export class CancelBundleTaskResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bundleTask?: BundleTask;
}
