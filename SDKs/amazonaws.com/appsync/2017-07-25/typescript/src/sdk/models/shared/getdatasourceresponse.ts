import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DataSource } from "./datasource";


export class GetDataSourceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataSource" })
  dataSource?: DataSource;
}
