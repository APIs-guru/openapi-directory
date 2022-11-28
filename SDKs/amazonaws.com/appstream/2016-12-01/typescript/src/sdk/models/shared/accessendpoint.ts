import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccessEndpointTypeEnum } from "./accessendpointtypeenum";



// AccessEndpoint
/** 
 * Describes an interface VPC endpoint (interface endpoint) that lets you create a private connection between the virtual private cloud (VPC) that you specify and AppStream 2.0. When you specify an interface endpoint for a stack, users of the stack can connect to AppStream 2.0 only through that endpoint. When you specify an interface endpoint for an image builder, administrators can connect to the image builder only through that endpoint.
**/
export class AccessEndpoint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndpointType" })
  endpointType: AccessEndpointTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=VpceId" })
  vpceId?: string;
}
