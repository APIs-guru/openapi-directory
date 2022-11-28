import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NetworkInterface } from "./networkinterface";



// CreateNetworkInterfaceResult
/** 
 * Contains the output of CreateNetworkInterface.
**/
export class CreateNetworkInterfaceResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientToken?: string;

  @SpeakeasyMetadata()
  networkInterface?: NetworkInterface;
}
