import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TableVersion } from "./tableversion";



export class GetTableVersionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=TableVersions", elemType: TableVersion })
  tableVersions?: TableVersion[];
}
