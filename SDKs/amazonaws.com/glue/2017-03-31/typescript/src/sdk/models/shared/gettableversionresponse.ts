import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TableVersion } from "./tableversion";



export class GetTableVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TableVersion" })
  tableVersion?: TableVersion;
}
