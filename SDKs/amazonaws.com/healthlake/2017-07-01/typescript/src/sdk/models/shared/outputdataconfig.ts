import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { S3Configuration } from "./s3configuration";


// OutputDataConfig
/** 
 * The output data configuration that was supplied when the export job was created.
**/
export class OutputDataConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=S3Configuration" })
  s3Configuration?: S3Configuration;
}
