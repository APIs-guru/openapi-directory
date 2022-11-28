import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeEndpointResponse
/** 
 * The output from the DescribeEndpoint operation.
**/
export class DescribeEndpointResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endpointAddress" })
  endpointAddress?: string;
}
