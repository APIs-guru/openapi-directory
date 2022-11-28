import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeHapgRequest
/** 
 * Contains the inputs for the <a>DescribeHapg</a> action.
**/
export class DescribeHapgRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HapgArn" })
  hapgArn: string;
}
