import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataSource } from "./datasource";



export class CreateDataSourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataSource" })
  dataSource?: DataSource;
}
