import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProtocolsListData } from "./protocolslistdata";


export class GetProtocolsListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ProtocolsList" })
  protocolsList?: ProtocolsListData;

  @Metadata({ data: "json, name=ProtocolsListArn" })
  protocolsListArn?: string;
}
