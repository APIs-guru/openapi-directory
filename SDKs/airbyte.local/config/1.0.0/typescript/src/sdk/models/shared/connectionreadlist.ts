import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConnectionRead } from "./connectionread";


export class ConnectionReadList extends SpeakeasyBase {
  @Metadata({ data: "json, name=connections", elemType: shared.ConnectionRead })
  connections: ConnectionRead[];
}
