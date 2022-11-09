import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DataSource } from "./datasource";


export class UpdateDataSourceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataSource" })
  dataSource?: DataSource;
}
