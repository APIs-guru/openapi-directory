import { SpeakeasyBase } from "../../../internal/utils";
import { ProtocolsListData } from "./protocolslistdata";
import { Tag } from "./tag";
export declare class PutProtocolsListRequest extends SpeakeasyBase {
    protocolsList: ProtocolsListData;
    tagList?: Tag[];
}
