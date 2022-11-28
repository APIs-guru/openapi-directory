import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeIdentityInput
/** 
 * Input to the <code>DescribeIdentity</code> action.
**/
export class DescribeIdentityInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IdentityId" })
  identityId: string;
}
