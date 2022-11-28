import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeLocationSmbRequest
/** 
 * DescribeLocationSmbRequest
**/
export class DescribeLocationSmbRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LocationArn" })
  locationArn: string;
}
