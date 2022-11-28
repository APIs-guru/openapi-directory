import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Ec2Config } from "./ec2config";



// DescribeLocationEfsResponse
/** 
 * DescribeLocationEfsResponse
**/
export class DescribeLocationEfsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Ec2Config" })
  ec2Config?: Ec2Config;

  @SpeakeasyMetadata({ data: "json, name=LocationArn" })
  locationArn?: string;

  @SpeakeasyMetadata({ data: "json, name=LocationUri" })
  locationUri?: string;
}
