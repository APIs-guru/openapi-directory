import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InterfaceProtocolTypeEnum } from "./interfaceprotocoltypeenum";
import { Tag } from "./tag";



// TrunkInterfaceAssociation
/** 
 * <note> <p>Currently available in <b>limited preview only</b>. If you are interested in using this feature, contact your account manager.</p> </note> <p>Information about an association between a branch network interface with a trunk network interface.</p>
**/
export class TrunkInterfaceAssociation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  associationId?: string;

  @SpeakeasyMetadata()
  branchInterfaceId?: string;

  @SpeakeasyMetadata()
  greKey?: number;

  @SpeakeasyMetadata()
  interfaceProtocol?: InterfaceProtocolTypeEnum;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata()
  trunkInterfaceId?: string;

  @SpeakeasyMetadata()
  vlanId?: number;
}
