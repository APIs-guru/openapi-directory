import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListThingsInThingGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=things" })
  things?: string[];
}
