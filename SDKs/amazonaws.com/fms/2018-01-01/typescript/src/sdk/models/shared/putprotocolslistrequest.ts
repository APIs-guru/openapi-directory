import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProtocolsListData } from "./protocolslistdata";
import { Tag } from "./tag";



export class PutProtocolsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ProtocolsList" })
  protocolsList: ProtocolsListData;

  @SpeakeasyMetadata({ data: "json, name=TagList", elemType: Tag })
  tagList?: Tag[];
}
