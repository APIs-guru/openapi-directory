import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceDetail } from "./servicedetail";



// DescribeVpcEndpointServicesResult
/** 
 * Contains the output of DescribeVpcEndpointServices.
**/
export class DescribeVpcEndpointServicesResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: string;

  @SpeakeasyMetadata({ elemType: ServiceDetail })
  serviceDetails?: ServiceDetail[];

  @SpeakeasyMetadata()
  serviceNames?: string[];
}
