import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { WebBackendConnectionRead } from "./webbackendconnectionread";


export class WebBackendConnectionReadList extends SpeakeasyBase {
  @Metadata({ data: "json, name=connections", elemType: shared.WebBackendConnectionRead })
  connections: WebBackendConnectionRead[];
}
