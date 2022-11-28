import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the request to list the devices.
**/
export declare class ListDevicesRequest extends SpeakeasyBase {
    accessToken: string;
    limit?: number;
    paginationToken?: string;
}
