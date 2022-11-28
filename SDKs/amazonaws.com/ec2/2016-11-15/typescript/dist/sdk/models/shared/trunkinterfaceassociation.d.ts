import { SpeakeasyBase } from "../../../internal/utils";
import { InterfaceProtocolTypeEnum } from "./interfaceprotocoltypeenum";
import { Tag } from "./tag";
/**
 * <note> <p>Currently available in <b>limited preview only</b>. If you are interested in using this feature, contact your account manager.</p> </note> <p>Information about an association between a branch network interface with a trunk network interface.</p>
**/
export declare class TrunkInterfaceAssociation extends SpeakeasyBase {
    associationId?: string;
    branchInterfaceId?: string;
    greKey?: number;
    interfaceProtocol?: InterfaceProtocolTypeEnum;
    tags?: Tag[];
    trunkInterfaceId?: string;
    vlanId?: number;
}
