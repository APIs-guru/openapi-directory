import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Ec2Config } from "./ec2config";


// DescribeLocationEfsResponse
/** 
 * DescribeLocationEfsResponse
**/
export class DescribeLocationEfsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=Ec2Config" })
  ec2Config?: Ec2Config;

  @Metadata({ data: "json, name=LocationArn" })
  locationArn?: string;

  @Metadata({ data: "json, name=LocationUri" })
  locationUri?: string;
}
