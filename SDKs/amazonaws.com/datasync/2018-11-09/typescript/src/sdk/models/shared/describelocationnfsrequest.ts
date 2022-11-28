import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeLocationNfsRequest
/** 
 * DescribeLocationNfsRequest
**/
export class DescribeLocationNfsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LocationArn" })
  locationArn: string;
}
