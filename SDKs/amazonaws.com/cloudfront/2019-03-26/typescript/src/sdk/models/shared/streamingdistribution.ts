import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActiveTrustedSigners } from "./activetrustedsigners";
import { StreamingDistributionConfig } from "./streamingdistributionconfig";



// StreamingDistribution
/** 
 * A streaming distribution tells CloudFront where you want RTMP content to be delivered from, and the details about how to track and manage content delivery.
**/
export class StreamingDistribution extends SpeakeasyBase {
  @SpeakeasyMetadata()
  arn: string;

  @SpeakeasyMetadata()
  activeTrustedSigners: ActiveTrustedSigners;

  @SpeakeasyMetadata()
  domainName: string;

  @SpeakeasyMetadata()
  id: string;

  @SpeakeasyMetadata()
  lastModifiedTime?: Date;

  @SpeakeasyMetadata()
  status: string;

  @SpeakeasyMetadata()
  streamingDistributionConfig: StreamingDistributionConfig;
}
