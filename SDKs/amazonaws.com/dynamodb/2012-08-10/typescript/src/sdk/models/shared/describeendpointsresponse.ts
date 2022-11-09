import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Endpoint } from "./endpoint";


export class DescribeEndpointsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Endpoints", elemType: shared.Endpoint })
  endpoints: Endpoint[];
}
