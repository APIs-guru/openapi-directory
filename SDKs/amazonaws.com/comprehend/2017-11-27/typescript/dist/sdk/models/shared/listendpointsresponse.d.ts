import { SpeakeasyBase } from "../../../internal/utils/utils";
import { EndpointProperties } from "./endpointproperties";
export declare class ListEndpointsResponse extends SpeakeasyBase {
    endpointPropertiesList?: EndpointProperties[];
    nextToken?: string;
}
