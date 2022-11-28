import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Instance } from "./instance";



// DescribeInstancesOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class DescribeInstancesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Instances", elemType: Instance })
  instances?: Instance[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
