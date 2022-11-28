import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActiveTrustedSigners } from "./activetrustedsigners";
import { AliasIcpRecordal } from "./aliasicprecordal";
import { DistributionConfig } from "./distributionconfig";



// Distribution
/** 
 * A distribution tells CloudFront where you want content to be delivered from, and the details about how to track and manage content delivery.
**/
export class Distribution extends SpeakeasyBase {
  @SpeakeasyMetadata()
  arn: string;

  @SpeakeasyMetadata()
  activeTrustedSigners: ActiveTrustedSigners;

  @SpeakeasyMetadata({ elemType: AliasIcpRecordal })
  aliasIcpRecordals?: AliasIcpRecordal[];

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
