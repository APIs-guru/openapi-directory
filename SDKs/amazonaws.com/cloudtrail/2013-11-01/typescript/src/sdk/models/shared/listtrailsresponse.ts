import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TrailInfo } from "./trailinfo";



export class ListTrailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Trails", elemType: TrailInfo })
  trails?: TrailInfo[];
}
