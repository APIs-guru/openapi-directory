import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Artifact } from "./artifact";
/**
 *  The result structure for the list artifacts request.
**/
export declare class ListArtifactsResult extends SpeakeasyBase {
    artifacts: Artifact[];
    nextToken?: string;
}
