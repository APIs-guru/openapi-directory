import { SpeakeasyBase } from "../../../internal/utils";
import { ArtifactLocation } from "./artifactlocation";
/**
 * Represents information about an artifact that is worked on by actions in the pipeline.
**/
export declare class Artifact extends SpeakeasyBase {
    location?: ArtifactLocation;
    name?: string;
    revision?: string;
}
