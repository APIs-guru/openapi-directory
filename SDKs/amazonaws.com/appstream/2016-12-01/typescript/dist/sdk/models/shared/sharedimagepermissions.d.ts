import { SpeakeasyBase } from "../../../internal/utils";
import { ImagePermissions } from "./imagepermissions";
/**
 * Describes the permissions that are available to the specified AWS account for a shared image.
**/
export declare class SharedImagePermissions extends SpeakeasyBase {
    imagePermissions: ImagePermissions;
    sharedAccountId: string;
}
