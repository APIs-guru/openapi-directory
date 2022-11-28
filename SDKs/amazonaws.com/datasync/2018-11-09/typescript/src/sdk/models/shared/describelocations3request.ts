import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeLocationS3Request
/** 
 * DescribeLocationS3Request
**/
export class DescribeLocationS3Request extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LocationArn" })
  locationArn: string;
}
