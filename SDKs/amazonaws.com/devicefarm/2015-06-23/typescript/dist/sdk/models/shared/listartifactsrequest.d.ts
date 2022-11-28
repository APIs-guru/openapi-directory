import { SpeakeasyBase } from "../../../internal/utils";
import { ArtifactCategoryEnum } from "./artifactcategoryenum";
/**
 * Represents a request to the list artifacts operation.
**/
export declare class ListArtifactsRequest extends SpeakeasyBase {
    arn: string;
    nextToken?: string;
    type: ArtifactCategoryEnum;
}
