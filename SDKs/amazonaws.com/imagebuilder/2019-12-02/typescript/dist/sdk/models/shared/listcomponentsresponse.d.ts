import { SpeakeasyBase } from "../../../internal/utils";
import { ComponentVersion } from "./componentversion";
export declare class ListComponentsResponse extends SpeakeasyBase {
    componentVersionList?: ComponentVersion[];
    nextToken?: string;
    requestId?: string;
}
