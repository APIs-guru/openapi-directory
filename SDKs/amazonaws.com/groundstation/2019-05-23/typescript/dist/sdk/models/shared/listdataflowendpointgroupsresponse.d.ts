import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DataflowEndpointListItem } from "./dataflowendpointlistitem";
/**
 * <p/>
**/
export declare class ListDataflowEndpointGroupsResponse extends SpeakeasyBase {
    dataflowEndpointGroupList?: DataflowEndpointListItem[];
    nextToken?: string;
}
