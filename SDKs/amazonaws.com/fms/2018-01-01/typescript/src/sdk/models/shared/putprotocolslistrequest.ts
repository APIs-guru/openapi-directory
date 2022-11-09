import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProtocolsListData } from "./protocolslistdata";
import { Tag } from "./tag";


export class PutProtocolsListRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ProtocolsList" })
  protocolsList: ProtocolsListData;

  @Metadata({ data: "json, name=TagList", elemType: shared.Tag })
  tagList?: Tag[];
}
