import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



// VpcClassicLink
/** 
 * Describes whether a VPC is enabled for ClassicLink.
**/
export class VpcClassicLink extends SpeakeasyBase {
  @SpeakeasyMetadata()
  classicLinkEnabled?: boolean;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata()
  vpcId?: string;
}
