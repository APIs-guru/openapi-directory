import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Database } from "./database";


export class ListDatabasesOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=DatabaseList", elemType: shared.Database })
  databaseList?: Database[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
