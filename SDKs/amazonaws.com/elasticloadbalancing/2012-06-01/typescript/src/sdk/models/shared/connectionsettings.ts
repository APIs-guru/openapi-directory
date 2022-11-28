import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ConnectionSettings
/** 
 * Information about the <code>ConnectionSettings</code> attribute.
**/
export class ConnectionSettings extends SpeakeasyBase {
  @SpeakeasyMetadata()
  idleTimeout: number;
}
