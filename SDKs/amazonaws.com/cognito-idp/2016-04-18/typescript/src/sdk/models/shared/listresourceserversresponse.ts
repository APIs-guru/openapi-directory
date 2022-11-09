import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResourceServerType } from "./resourceservertype";


export class ListResourceServersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ResourceServers", elemType: shared.ResourceServerType })
  resourceServers: ResourceServerType[];
}
