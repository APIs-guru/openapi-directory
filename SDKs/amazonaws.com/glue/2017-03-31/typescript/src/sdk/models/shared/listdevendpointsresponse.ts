import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListDevEndpointsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DevEndpointNames" })
  devEndpointNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
