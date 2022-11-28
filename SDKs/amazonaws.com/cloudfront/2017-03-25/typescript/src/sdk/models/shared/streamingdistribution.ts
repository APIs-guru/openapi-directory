import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActiveTrustedSigners } from "./activetrustedsigners";
import { StreamingDistributionConfig } from "./streamingdistributionconfig";



// StreamingDistribution
/** 
 * A streaming distribution. 
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
