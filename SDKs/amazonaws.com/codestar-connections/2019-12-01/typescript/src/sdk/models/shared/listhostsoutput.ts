import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Host } from "./host";


export class ListHostsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Hosts", elemType: shared.Host })
  hosts?: Host[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
