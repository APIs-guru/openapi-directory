import { SpeakeasyBase } from "../../../internal/utils";
import { Artifact } from "./artifact";
/**
 * Represents the result of a list artifacts operation.
**/
export declare class ListArtifactsResult extends SpeakeasyBase {
    artifacts?: Artifact[];
    nextToken?: string;
}
