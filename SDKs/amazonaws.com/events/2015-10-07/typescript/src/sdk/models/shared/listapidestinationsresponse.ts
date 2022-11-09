import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ApiDestination } from "./apidestination";


export class ListApiDestinationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApiDestinations", elemType: shared.ApiDestination })
  apiDestinations?: ApiDestination[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
