import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListLunaClientsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientList" })
  clientList: string[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
