import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserPoolType } from "./userpooltype";



// DescribeUserPoolResponse
/** 
 * Represents the response to describe the user pool.
**/
export class DescribeUserPoolResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=UserPool" })
  userPool?: UserPoolType;
}
