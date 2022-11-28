import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  The configuration of the S3 bucket for either an import or export job. This includes assigning permissions for access.
**/
export declare class S3Configuration extends SpeakeasyBase {
    kmsKeyId: string;
    s3Uri: string;
}
