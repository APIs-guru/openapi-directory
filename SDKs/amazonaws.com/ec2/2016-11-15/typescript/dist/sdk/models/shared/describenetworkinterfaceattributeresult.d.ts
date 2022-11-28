import { SpeakeasyBase } from "../../../internal/utils";
import { NetworkInterfaceAttachment } from "./networkinterfaceattachment";
import { AttributeValue } from "./attributevalue";
import { GroupIdentifier } from "./groupidentifier";
import { AttributeBooleanValue } from "./attributebooleanvalue";
/**
 * Contains the output of DescribeNetworkInterfaceAttribute.
**/
export declare class DescribeNetworkInterfaceAttributeResult extends SpeakeasyBase {
    attachment?: NetworkInterfaceAttachment;
    description?: AttributeValue;
    groups?: GroupIdentifier[];
    networkInterfaceId?: string;
    sourceDestCheck?: AttributeBooleanValue;
}
