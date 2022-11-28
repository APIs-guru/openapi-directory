import { SpeakeasyBase } from "../../../internal/utils";
import { RevisionLocation } from "./revisionlocation";
import { GenericRevisionInfo } from "./genericrevisioninfo";
/**
 * Represents the output of a <code>GetApplicationRevision</code> operation.
**/
export declare class GetApplicationRevisionOutput extends SpeakeasyBase {
    applicationName?: string;
    revision?: RevisionLocation;
    revisionInfo?: GenericRevisionInfo;
}
