import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ComponentVersion } from "./componentversion";


export class ListComponentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=componentVersionList", elemType: shared.ComponentVersion })
  componentVersionList?: ComponentVersion[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;
}
