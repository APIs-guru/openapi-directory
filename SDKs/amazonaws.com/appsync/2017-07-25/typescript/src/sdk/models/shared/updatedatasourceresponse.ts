import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataSource } from "./datasource";



export class UpdateDataSourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataSource" })
  dataSource?: DataSource;
}
