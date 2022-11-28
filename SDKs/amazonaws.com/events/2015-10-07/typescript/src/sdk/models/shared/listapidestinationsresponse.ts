import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApiDestination } from "./apidestination";



export class ListApiDestinationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApiDestinations", elemType: ApiDestination })
  apiDestinations?: ApiDestination[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
