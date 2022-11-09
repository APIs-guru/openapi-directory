import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DescribeEndpointResponse
/** 
 * The output from the DescribeEndpoint operation.
**/
export class DescribeEndpointResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=endpointAddress" })
  endpointAddress?: string;
}
