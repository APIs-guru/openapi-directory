import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConnectionStateEnum } from "./connectionstateenum";



export class ListConnectionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConnectionState" })
  connectionState?: ConnectionStateEnum;

  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=NamePrefix" })
  namePrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
