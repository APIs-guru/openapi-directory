import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DevEndpoint } from "./devendpoint";


export class GetDevEndpointsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DevEndpoints", elemType: shared.DevEndpoint })
  devEndpoints?: DevEndpoint[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
