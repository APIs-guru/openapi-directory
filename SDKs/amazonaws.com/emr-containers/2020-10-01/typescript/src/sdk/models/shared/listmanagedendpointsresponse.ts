import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Endpoint } from "./endpoint";



export class ListManagedEndpointsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endpoints", elemType: Endpoint })
  endpoints?: Endpoint[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
