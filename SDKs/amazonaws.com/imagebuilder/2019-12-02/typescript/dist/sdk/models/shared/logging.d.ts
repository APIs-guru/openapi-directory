import { SpeakeasyBase } from "../../../internal/utils/utils";
import { S3Logs } from "./s3logs";
/**
 * Logging configuration defines where Image Builder uploads your logs.
**/
export declare class Logging extends SpeakeasyBase {
    s3Logs?: S3Logs;
}
