import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TableVersion } from "./tableversion";


export class GetTableVersionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=TableVersions", elemType: shared.TableVersion })
  tableVersions?: TableVersion[];
}
