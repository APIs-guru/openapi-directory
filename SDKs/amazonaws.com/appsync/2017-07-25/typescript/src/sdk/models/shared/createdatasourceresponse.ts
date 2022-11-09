import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DataSource } from "./datasource";


export class CreateDataSourceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataSource" })
  dataSource?: DataSource;
}
