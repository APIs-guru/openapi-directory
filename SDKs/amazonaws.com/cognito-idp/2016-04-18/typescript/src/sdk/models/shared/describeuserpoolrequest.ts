import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeUserPoolRequest
/** 
 * Represents the request to describe the user pool.
**/
export class DescribeUserPoolRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=UserPoolId" })
  userPoolId: string;
}
