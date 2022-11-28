import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Connection } from "./connection";



export class GetConnectionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConnectionList", elemType: Connection })
  connectionList?: Connection[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
