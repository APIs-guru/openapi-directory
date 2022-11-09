import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListLunaClientsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientList" })
  clientList: string[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
