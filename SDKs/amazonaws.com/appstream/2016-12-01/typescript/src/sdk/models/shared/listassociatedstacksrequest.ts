import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListAssociatedStacksRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=FleetName" })
  fleetName: string;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
