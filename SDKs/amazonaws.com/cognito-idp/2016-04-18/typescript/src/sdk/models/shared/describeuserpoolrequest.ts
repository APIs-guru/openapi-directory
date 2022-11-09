import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DescribeUserPoolRequest
/** 
 * Represents the request to describe the user pool.
**/
export class DescribeUserPoolRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=UserPoolId" })
  userPoolId: string;
}
