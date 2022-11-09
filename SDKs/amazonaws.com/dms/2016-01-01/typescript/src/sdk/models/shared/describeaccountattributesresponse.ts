import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AccountQuota } from "./accountquota";


// DescribeAccountAttributesResponse
/** 
 * <p/>
**/
export class DescribeAccountAttributesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountQuotas", elemType: shared.AccountQuota })
  accountQuotas?: AccountQuota[];

  @Metadata({ data: "json, name=UniqueAccountIdentifier" })
  uniqueAccountIdentifier?: string;
}
