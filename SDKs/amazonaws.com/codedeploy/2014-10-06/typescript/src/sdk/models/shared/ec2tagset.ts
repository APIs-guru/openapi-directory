import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Ec2TagFilter } from "./ec2tagfilter";


// Ec2TagSet
/** 
 * Information about groups of EC2 instance tags.
**/
export class Ec2TagSet extends SpeakeasyBase {
  @Metadata({ data: "json, name=ec2TagSetList", elemType: shared.Ec2TagFilter, elemDepth: 2 })
  ec2TagSetList?: Ec2TagFilter[][];
}
