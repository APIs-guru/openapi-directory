import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConnectionStateEnum } from "./connectionstateenum";


export class ListConnectionsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConnectionState" })
  connectionState?: ConnectionStateEnum;

  @Metadata({ data: "json, name=Limit" })
  limit?: number;

  @Metadata({ data: "json, name=NamePrefix" })
  namePrefix?: string;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
