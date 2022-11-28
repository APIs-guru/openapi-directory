import { SpeakeasyBase } from "../../../internal/utils";
import { GenericRevisionInfo } from "./genericrevisioninfo";
import { RevisionLocation } from "./revisionlocation";
/**
 * Information about an application revision.
**/
export declare class RevisionInfo extends SpeakeasyBase {
    genericRevisionInfo?: GenericRevisionInfo;
    revisionLocation?: RevisionLocation;
}
