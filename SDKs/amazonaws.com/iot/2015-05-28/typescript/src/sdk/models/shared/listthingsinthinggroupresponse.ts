import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListThingsInThingGroupResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=things" })
  things?: string[];
}
