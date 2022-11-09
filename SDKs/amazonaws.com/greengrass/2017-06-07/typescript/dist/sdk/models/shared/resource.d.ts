import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceDataContainer } from "./resourcedatacontainer";
/**
 * Information about a resource.
**/
export declare class Resource extends SpeakeasyBase {
    id: string;
    name: string;
    resourceDataContainer: ResourceDataContainer;
}
