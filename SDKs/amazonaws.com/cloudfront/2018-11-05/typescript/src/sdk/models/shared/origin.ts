import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomHeaders } from "./customheaders";
import { CustomOriginConfig } from "./customoriginconfig";
import { S3OriginConfig } from "./s3originconfig";



// Origin
/** 
 * <p>A complex type that describes the Amazon S3 bucket, HTTP server (for example, a web server), Amazon MediaStore, or other server from which CloudFront gets your files. This can also be an origin group, if you've created an origin group. You must specify at least one origin or origin group.</p> <p>For the current limit on the number of origins or origin groups that you can specify for a distribution, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_cloudfront">Amazon CloudFront Limits</a> in the <i>AWS General Reference</i>.</p>
**/
export class Origin extends SpeakeasyBase {
  @SpeakeasyMetadata()
  customHeaders?: CustomHeaders;

  @SpeakeasyMetadata()
  customOriginConfig?: CustomOriginConfig;

  @SpeakeasyMetadata()
  domainName: string;

  @SpeakeasyMetadata()
  id: string;

  @SpeakeasyMetadata()
  originPath?: string;

  @SpeakeasyMetadata()
  s3OriginConfig?: S3OriginConfig;
}
