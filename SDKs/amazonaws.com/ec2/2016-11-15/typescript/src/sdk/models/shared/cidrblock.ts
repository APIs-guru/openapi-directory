import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CidrBlock
/** 
 * Describes an IPv4 CIDR block.
**/
export class CidrBlock extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cidrBlock?: string;
}
