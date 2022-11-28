import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Ec2TagFilter } from "./ec2tagfilter";



// Ec2TagSet
/** 
 * Information about groups of EC2 instance tags.
**/
export class Ec2TagSet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ec2TagSetList", elemType: Ec2TagFilter, elemDepth: 2 })
  ec2TagSetList?: Ec2TagFilter[][];
}
