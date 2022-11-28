import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountQuota } from "./accountquota";



// DescribeAccountAttributesResponse
/** 
 * <p/>
**/
export class DescribeAccountAttributesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountQuotas", elemType: AccountQuota })
  accountQuotas?: AccountQuota[];

  @SpeakeasyMetadata({ data: "json, name=UniqueAccountIdentifier" })
  uniqueAccountIdentifier?: string;
}
