import { SpeakeasyBase } from "../../../internal/utils";
import { Permission } from "./permission";
export declare class ListPermissionsResponse extends SpeakeasyBase {
    nextToken?: string;
    permissions?: Permission[];
}
