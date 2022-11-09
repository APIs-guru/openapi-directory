import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Instance } from "./instance";


// DescribeInstancesOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class DescribeInstancesOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Instances", elemType: shared.Instance })
  instances?: Instance[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
