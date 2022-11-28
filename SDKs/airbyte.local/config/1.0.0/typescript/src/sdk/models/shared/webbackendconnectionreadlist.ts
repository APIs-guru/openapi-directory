import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WebBackendConnectionRead } from "./webbackendconnectionread";



export class WebBackendConnectionReadList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connections", elemType: WebBackendConnectionRead })
  connections: WebBackendConnectionRead[];
}
