import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PlatformFramework
/** 
 * A framework supported by the platform.
**/
export class PlatformFramework extends SpeakeasyBase {
  @SpeakeasyMetadata()
  name?: string;

  @SpeakeasyMetadata()
  version?: string;
}
