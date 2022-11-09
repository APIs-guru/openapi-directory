import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EndpointGroup } from "./endpointgroup";


export class ListEndpointGroupsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndpointGroups", elemType: shared.EndpointGroup })
  endpointGroups?: EndpointGroup[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
