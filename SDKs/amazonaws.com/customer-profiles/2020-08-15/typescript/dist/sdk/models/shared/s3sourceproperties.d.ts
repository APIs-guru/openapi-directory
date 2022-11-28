import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The properties that are applied when Amazon S3 is being used as the flow source.
**/
export declare class S3SourceProperties extends SpeakeasyBase {
    bucketName: string;
    bucketPrefix?: string;
}
