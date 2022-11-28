import { SpeakeasyBase } from "../../../internal/utils";
import { VpcEndpoint } from "./vpcendpoint";
/**
 * Contains the output of CreateVpcEndpoint.
**/
export declare class CreateVpcEndpointResult extends SpeakeasyBase {
    clientToken?: string;
    vpcEndpoint?: VpcEndpoint;
}
