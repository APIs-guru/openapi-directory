import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { S3Logs } from "./s3logs";


// Logging
/** 
 * Logging configuration defines where Image Builder uploads your logs.
**/
export class Logging extends SpeakeasyBase {
  @Metadata({ data: "json, name=s3Logs" })
  s3Logs?: S3Logs;
}
