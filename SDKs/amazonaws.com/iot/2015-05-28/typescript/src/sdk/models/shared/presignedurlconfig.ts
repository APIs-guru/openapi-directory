import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PresignedUrlConfig
/** 
 * Configuration for pre-signed S3 URLs.
**/
export class PresignedUrlConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=expiresInSec" })
  expiresInSec?: number;

  @Metadata({ data: "json, name=roleArn" })
  roleArn?: string;
}
