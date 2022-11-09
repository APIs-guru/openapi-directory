import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DescribeHapgRequest
/** 
 * Contains the inputs for the <a>DescribeHapg</a> action.
**/
export class DescribeHapgRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=HapgArn" })
  hapgArn: string;
}
