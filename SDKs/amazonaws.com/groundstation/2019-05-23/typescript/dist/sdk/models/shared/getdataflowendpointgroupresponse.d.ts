import { SpeakeasyBase } from "../../../internal/utils";
import { EndpointDetails } from "./endpointdetails";
/**
 * <p/>
**/
export declare class GetDataflowEndpointGroupResponse extends SpeakeasyBase {
    dataflowEndpointGroupArn?: string;
    dataflowEndpointGroupId?: string;
    endpointsDetails?: EndpointDetails[];
    tags?: Map<string, string>;
}
