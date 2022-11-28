import { SpeakeasyBase } from "../../../internal/utils";
import { MountTargetDescription } from "./mounttargetdescription";
/**
 * <p/>
**/
export declare class DescribeMountTargetsResponse extends SpeakeasyBase {
    marker?: string;
    mountTargets?: MountTargetDescription[];
    nextMarker?: string;
}
