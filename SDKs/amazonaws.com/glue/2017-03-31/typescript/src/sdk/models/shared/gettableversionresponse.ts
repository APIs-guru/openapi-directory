import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TableVersion } from "./tableversion";


export class GetTableVersionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=TableVersion" })
  tableVersion?: TableVersion;
}
