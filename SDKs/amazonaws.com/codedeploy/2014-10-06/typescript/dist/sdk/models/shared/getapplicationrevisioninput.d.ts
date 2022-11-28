import { SpeakeasyBase } from "../../../internal/utils";
import { RevisionLocation } from "./revisionlocation";
/**
 * Represents the input of a <code>GetApplicationRevision</code> operation.
**/
export declare class GetApplicationRevisionInput extends SpeakeasyBase {
    applicationName: string;
    revision: RevisionLocation;
}
