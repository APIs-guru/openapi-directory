import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeLocationEfsRequest
/** 
 * DescribeLocationEfsRequest
**/
export class DescribeLocationEfsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LocationArn" })
  locationArn: string;
}
