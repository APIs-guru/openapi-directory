import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceTypeEnum } from "./servicetypeenum";



// ServiceTypeDetail
/** 
 * Describes the type of service for a VPC endpoint.
**/
export class ServiceTypeDetail extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serviceType?: ServiceTypeEnum;
}
