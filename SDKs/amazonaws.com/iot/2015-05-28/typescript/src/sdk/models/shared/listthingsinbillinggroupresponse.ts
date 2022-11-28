import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListThingsInBillingGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=things" })
  things?: string[];
}
