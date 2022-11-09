import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DescribeIdentityPoolInput
/** 
 * Input to the DescribeIdentityPool action.
**/
export class DescribeIdentityPoolInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=IdentityPoolId" })
  identityPoolId: string;
}
