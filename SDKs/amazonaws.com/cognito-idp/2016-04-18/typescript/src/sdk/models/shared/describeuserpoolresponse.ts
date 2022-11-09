import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UserPoolType } from "./userpooltype";


// DescribeUserPoolResponse
/** 
 * Represents the response to describe the user pool.
**/
export class DescribeUserPoolResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=UserPool" })
  userPool?: UserPoolType;
}
