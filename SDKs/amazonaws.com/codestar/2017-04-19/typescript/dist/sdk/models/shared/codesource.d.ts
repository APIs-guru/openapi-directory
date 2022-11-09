import { SpeakeasyBase } from "../../../internal/utils/utils";
import { S3Location } from "./s3location";
/**
 * The location where the source code files provided with the project request are stored. AWS CodeStar retrieves the files during project creation.
**/
export declare class CodeSource extends SpeakeasyBase {
    s3: S3Location;
}
