import { SpeakeasyBase } from "../../../internal/utils";
import { RevisionLocation } from "./revisionlocation";
/**
 * Represents the input of a RegisterApplicationRevision operation.
**/
export declare class RegisterApplicationRevisionInput extends SpeakeasyBase {
    applicationName: string;
    description?: string;
    revision: RevisionLocation;
}
