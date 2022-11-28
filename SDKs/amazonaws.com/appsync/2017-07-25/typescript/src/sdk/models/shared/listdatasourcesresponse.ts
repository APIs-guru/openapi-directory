import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataSource } from "./datasource";



export class ListDataSourcesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataSources", elemType: DataSource })
  dataSources?: DataSource[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
