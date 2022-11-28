import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActiveTrustedSigners } from "./activetrustedsigners";
import { DistributionConfig } from "./distributionconfig";



// Distribution
/** 
 * The distribution's information.
**/
export class Distribution extends SpeakeasyBase {
  @SpeakeasyMetadata()
  arn: string;

  @SpeakeasyMetadata()
  activeTrustedSigners: ActiveTrustedSigners;

  @SpeakeasyMetadata()
  distributionConfig: DistributionConfig;

  @SpeakeasyMetadata()
  domainName: string;

  @SpeakeasyMetadata()
  id: string;

  @SpeakeasyMetadata()
  inProgressInvalidationBatches: number;

  @SpeakeasyMetadata()
  lastModifiedTime: Date;

  @SpeakeasyMetadata()
  status: string;
}
