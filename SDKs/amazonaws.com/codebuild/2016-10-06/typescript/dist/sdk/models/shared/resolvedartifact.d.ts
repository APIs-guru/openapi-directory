import { SpeakeasyBase } from "../../../internal/utils";
import { ArtifactsTypeEnum } from "./artifactstypeenum";
/**
 * Represents a resolved build artifact. A resolved artifact is an artifact that is built and deployed to the destination, such as Amazon S3.
**/
export declare class ResolvedArtifact extends SpeakeasyBase {
    identifier?: string;
    location?: string;
    type?: ArtifactsTypeEnum;
}
