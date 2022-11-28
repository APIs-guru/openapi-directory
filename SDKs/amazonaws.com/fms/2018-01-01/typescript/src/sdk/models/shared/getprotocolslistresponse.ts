import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProtocolsListData } from "./protocolslistdata";



export class GetProtocolsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ProtocolsList" })
  protocolsList?: ProtocolsListData;

  @SpeakeasyMetadata({ data: "json, name=ProtocolsListArn" })
  protocolsListArn?: string;
}
