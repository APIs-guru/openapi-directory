import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsJobPresignedUrlConfig
/** 
 * Configuration information for pre-signed URLs. Valid when <code>protocols</code> contains HTTP.
**/
export class AwsJobPresignedUrlConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expiresInSec" })
  expiresInSec?: number;
}
