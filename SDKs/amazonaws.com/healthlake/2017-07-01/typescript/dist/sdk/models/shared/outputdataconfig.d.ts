import { SpeakeasyBase } from "../../../internal/utils/utils";
import { S3Configuration } from "./s3configuration";
/**
 * The output data configuration that was supplied when the export job was created.
**/
export declare class OutputDataConfig extends SpeakeasyBase {
    s3Configuration?: S3Configuration;
}
