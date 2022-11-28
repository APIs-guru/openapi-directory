import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BundleTask } from "./bundletask";



// BundleInstanceResult
/** 
 * Contains the output of BundleInstance.
**/
export class BundleInstanceResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bundleTask?: BundleTask;
}
