import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the request to list devices, as an administrator.
**/
export declare class AdminListDevicesRequest extends SpeakeasyBase {
    limit?: number;
    paginationToken?: string;
    userPoolId: string;
    username: string;
}
