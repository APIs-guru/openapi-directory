import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { S3Location } from "./s3location";



// CodeSource
/** 
 * The location where the source code files provided with the project request are stored. AWS CodeStar retrieves the files during project creation.
**/
export class CodeSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=s3" })
  s3: S3Location;
}
