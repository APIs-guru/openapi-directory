import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeLocationObjectStorageRequest
/** 
 * DescribeLocationObjectStorageRequest
**/
export class DescribeLocationObjectStorageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LocationArn" })
  locationArn: string;
}
