import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Connection } from "./connection";



export class ListConnectionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Connections", elemType: Connection })
  connections?: Connection[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
