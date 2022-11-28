import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClassicLinkDnsSupport } from "./classiclinkdnssupport";



export class DescribeVpcClassicLinkDnsSupportResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: string;

  @SpeakeasyMetadata({ elemType: ClassicLinkDnsSupport })
  vpcs?: ClassicLinkDnsSupport[];
}
