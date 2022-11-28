import { SpeakeasyBase } from "../../../internal/utils";
import { Artifact } from "./artifact";
/**
 * Output structure for the UpateJob operation.
**/
export declare class UpdateJobOutput extends SpeakeasyBase {
    artifactList?: Artifact[];
    success?: boolean;
    warningMessage?: string;
}
