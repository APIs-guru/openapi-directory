import { SpeakeasyBase } from "../../../internal/utils";
import { S3Location } from "./s3location";
/**
 * The Amazon S3 location where the toolchain template file provided with the project request is stored. AWS CodeStar retrieves the file during project creation.
**/
export declare class ToolchainSource extends SpeakeasyBase {
    s3: S3Location;
}
