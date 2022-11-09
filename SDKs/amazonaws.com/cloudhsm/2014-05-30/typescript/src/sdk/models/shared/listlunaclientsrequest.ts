import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListLunaClientsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
