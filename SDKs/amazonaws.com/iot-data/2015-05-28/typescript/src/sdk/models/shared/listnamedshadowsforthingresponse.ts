import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListNamedShadowsForThingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=results" })
  results?: string[];

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp?: number;
}
