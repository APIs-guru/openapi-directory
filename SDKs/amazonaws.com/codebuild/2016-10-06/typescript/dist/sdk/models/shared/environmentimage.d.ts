import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about a Docker image that is managed by CodeBuild.
**/
export declare class EnvironmentImage extends SpeakeasyBase {
    description?: string;
    name?: string;
    versions?: string[];
}
