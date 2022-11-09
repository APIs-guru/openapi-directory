import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DataSource } from "./datasource";


export class ListDataSourcesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataSources", elemType: shared.DataSource })
  dataSources?: DataSource[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
