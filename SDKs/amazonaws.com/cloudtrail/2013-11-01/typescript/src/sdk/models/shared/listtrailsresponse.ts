import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TrailInfo } from "./trailinfo";


export class ListTrailsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Trails", elemType: shared.TrailInfo })
  trails?: TrailInfo[];
}
