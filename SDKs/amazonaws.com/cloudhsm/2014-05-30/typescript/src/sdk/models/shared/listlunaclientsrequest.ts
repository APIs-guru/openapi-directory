import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListLunaClientsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
