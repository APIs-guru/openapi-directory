import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListNamedShadowsForThingResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=results" })
  results?: string[];

  @Metadata({ data: "json, name=timestamp" })
  timestamp?: number;
}
