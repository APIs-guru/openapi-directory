import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { S3Location } from "./s3location";



// ToolchainSource
/** 
 * The Amazon S3 location where the toolchain template file provided with the project request is stored. AWS CodeStar retrieves the file during project creation.
**/
export class ToolchainSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=s3" })
  s3: S3Location;
}
