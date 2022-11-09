import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListDevEndpointsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DevEndpointNames" })
  devEndpointNames?: string[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
