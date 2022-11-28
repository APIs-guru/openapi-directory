import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeIdentityPoolInput
/** 
 * Input to the DescribeIdentityPool action.
**/
export class DescribeIdentityPoolInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IdentityPoolId" })
  identityPoolId: string;
}
