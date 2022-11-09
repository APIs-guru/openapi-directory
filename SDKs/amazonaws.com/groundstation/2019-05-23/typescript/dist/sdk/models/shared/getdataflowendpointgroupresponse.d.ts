import { SpeakeasyBase } from "../../../internal/utils/utils";
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
