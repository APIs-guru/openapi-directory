import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { S3Logs } from "./s3logs";



// Logging
/** 
 * Logging configuration defines where Image Builder uploads your logs.
**/
export class Logging extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=s3Logs" })
  s3Logs?: S3Logs;
}
