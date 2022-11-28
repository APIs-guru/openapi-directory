import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Listener
/** 
 * Describes the properties of a Listener for the LoadBalancer.
**/
export class Listener extends SpeakeasyBase {
  @SpeakeasyMetadata()
  port?: number;

  @SpeakeasyMetadata()
  protocol?: string;
}
