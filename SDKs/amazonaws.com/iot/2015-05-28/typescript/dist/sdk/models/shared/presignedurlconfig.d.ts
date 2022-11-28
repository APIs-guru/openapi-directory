import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration for pre-signed S3 URLs.
**/
export declare class PresignedUrlConfig extends SpeakeasyBase {
    expiresInSec?: number;
    roleArn?: string;
}
