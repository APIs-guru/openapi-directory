import { SpeakeasyBase } from "../../../internal/utils";
import { UpsolverS3OutputFormatConfig } from "./upsolvers3outputformatconfig";
/**
 *  The properties that are applied when Upsolver is used as a destination.
**/
export declare class UpsolverDestinationProperties extends SpeakeasyBase {
    bucketName: string;
    bucketPrefix?: string;
    s3OutputFormatConfig: UpsolverS3OutputFormatConfig;
}
