import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceServerType } from "./resourceservertype";



export class ListResourceServersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceServers", elemType: ResourceServerType })
  resourceServers: ResourceServerType[];
}
