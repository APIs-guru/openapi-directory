import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AttachNetworkInterfaceResult
/** 
 * Contains the output of AttachNetworkInterface.
**/
export class AttachNetworkInterfaceResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  attachmentId?: string;

  @SpeakeasyMetadata()
  networkCardIndex?: number;
}
