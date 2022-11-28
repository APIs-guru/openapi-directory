import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListAssociatedStacksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FleetName" })
  fleetName: string;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
