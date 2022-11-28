import { SpeakeasyBase } from "../../../internal/utils";
import { S3Location } from "./s3location";
/**
 * Artifact details for the action execution, such as the artifact location.
**/
export declare class ArtifactDetail extends SpeakeasyBase {
    name?: string;
    s3location?: S3Location;
}
