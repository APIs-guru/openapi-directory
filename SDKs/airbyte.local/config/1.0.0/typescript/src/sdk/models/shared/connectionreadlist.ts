import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConnectionRead } from "./connectionread";



export class ConnectionReadList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connections", elemType: ConnectionRead })
  connections: ConnectionRead[];
}
