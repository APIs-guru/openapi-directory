import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VpcClassicLink } from "./vpcclassiclink";



export class DescribeVpcClassicLinkResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: VpcClassicLink })
  vpcs?: VpcClassicLink[];
}
