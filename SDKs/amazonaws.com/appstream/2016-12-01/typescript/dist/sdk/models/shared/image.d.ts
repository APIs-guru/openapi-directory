import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Application } from "./application";
import { ResourceError } from "./resourceerror";
import { ImagePermissions } from "./imagepermissions";
import { PlatformTypeEnum } from "./platformtypeenum";
import { ImageStateEnum } from "./imagestateenum";
import { ImageStateChangeReason } from "./imagestatechangereason";
import { VisibilityTypeEnum } from "./visibilitytypeenum";
/**
 * Describes an image.
**/
export declare class Image extends SpeakeasyBase {
    applications?: Application[];
    appstreamAgentVersion?: string;
    arn?: string;
    baseImageArn?: string;
    createdTime?: Date;
    description?: string;
    displayName?: string;
    imageBuilderName?: string;
    imageBuilderSupported?: boolean;
    imageErrors?: ResourceError[];
    imagePermissions?: ImagePermissions;
    name: string;
    platform?: PlatformTypeEnum;
    publicBaseImageReleasedDate?: Date;
    state?: ImageStateEnum;
    stateChangeReason?: ImageStateChangeReason;
    visibility?: VisibilityTypeEnum;
}
