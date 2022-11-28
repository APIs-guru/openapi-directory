import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PresignedUrlConfig
/** 
 * Configuration for pre-signed S3 URLs.
**/
export class PresignedUrlConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expiresInSec" })
  expiresInSec?: number;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn?: string;
}
