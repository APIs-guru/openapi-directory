import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DescribeIdentityInput
/** 
 * Input to the <code>DescribeIdentity</code> action.
**/
export class DescribeIdentityInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=IdentityId" })
  identityId: string;
}
