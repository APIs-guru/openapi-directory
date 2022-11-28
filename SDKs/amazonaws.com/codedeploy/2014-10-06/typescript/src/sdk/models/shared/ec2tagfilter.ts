import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Ec2TagFilterTypeEnum } from "./ec2tagfiltertypeenum";



// Ec2TagFilter
/** 
 * Information about an EC2 tag filter.
**/
export class Ec2TagFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: Ec2TagFilterTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: string;
}
