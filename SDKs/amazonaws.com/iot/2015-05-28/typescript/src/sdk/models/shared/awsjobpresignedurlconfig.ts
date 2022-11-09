import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsJobPresignedUrlConfig
/** 
 * Configuration information for pre-signed URLs. Valid when <code>protocols</code> contains HTTP.
**/
export class AwsJobPresignedUrlConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=expiresInSec" })
  expiresInSec?: number;
}
