import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EndpointGroup } from "./endpointgroup";



export class ListEndpointGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndpointGroups", elemType: EndpointGroup })
  endpointGroups?: EndpointGroup[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
