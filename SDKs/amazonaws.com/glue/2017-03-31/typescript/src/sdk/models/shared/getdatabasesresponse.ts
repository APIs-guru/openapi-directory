import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Database } from "./database";



export class GetDatabasesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DatabaseList", elemType: Database })
  databaseList: Database[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
