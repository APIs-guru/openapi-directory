import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ConflictingAlias
/** 
 * An alias (also called a CNAME) and the CloudFront distribution and Amazon Web Services account ID that it’s associated with. The distribution and account IDs are partially hidden, which allows you to identify the distributions and accounts that you own, but helps to protect the information of ones that you don’t own.
**/
export class ConflictingAlias extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accountId?: string;

  @SpeakeasyMetadata()
  alias?: string;

  @SpeakeasyMetadata()
  distributionId?: string;
}
