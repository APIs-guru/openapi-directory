import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Connection } from "./connection";


export class GetConnectionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConnectionList", elemType: shared.Connection })
  connectionList?: Connection[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
