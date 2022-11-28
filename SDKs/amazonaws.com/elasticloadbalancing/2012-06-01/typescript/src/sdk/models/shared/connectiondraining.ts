import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ConnectionDraining
/** 
 * Information about the <code>ConnectionDraining</code> attribute.
**/
export class ConnectionDraining extends SpeakeasyBase {
  @SpeakeasyMetadata()
  enabled: boolean;

  @SpeakeasyMetadata()
  timeout?: number;
}
