import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Ec2TagFilterTypeEnum } from "./ec2tagfiltertypeenum";


// Ec2TagFilter
/** 
 * Information about an EC2 tag filter.
**/
export class Ec2TagFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=Key" })
  key?: string;

  @Metadata({ data: "json, name=Type" })
  type?: Ec2TagFilterTypeEnum;

  @Metadata({ data: "json, name=Value" })
  value?: string;
}
