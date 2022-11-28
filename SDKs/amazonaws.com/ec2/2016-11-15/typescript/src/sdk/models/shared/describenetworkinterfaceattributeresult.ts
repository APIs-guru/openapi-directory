import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NetworkInterfaceAttachment } from "./networkinterfaceattachment";
import { AttributeValue } from "./attributevalue";
import { GroupIdentifier } from "./groupidentifier";
import { AttributeBooleanValue } from "./attributebooleanvalue";



// DescribeNetworkInterfaceAttributeResult
/** 
 * Contains the output of DescribeNetworkInterfaceAttribute.
**/
export class DescribeNetworkInterfaceAttributeResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  attachment?: NetworkInterfaceAttachment;

  @SpeakeasyMetadata()
  description?: AttributeValue;

  @SpeakeasyMetadata({ elemType: GroupIdentifier })
  groups?: GroupIdentifier[];

  @SpeakeasyMetadata()
  networkInterfaceId?: string;

  @SpeakeasyMetadata()
  sourceDestCheck?: AttributeBooleanValue;
}
