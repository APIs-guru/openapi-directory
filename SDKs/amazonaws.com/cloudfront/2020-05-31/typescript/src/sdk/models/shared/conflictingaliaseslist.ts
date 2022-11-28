import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConflictingAlias } from "./conflictingalias";



// ConflictingAliasesList
/** 
 * A list of aliases (also called CNAMEs) and the CloudFront distributions and Amazon Web Services accounts that they are associated with. In the list, the distribution and account IDs are partially hidden, which allows you to identify the distributions and accounts that you own, but helps to protect the information of ones that you don’t own.
**/
export class ConflictingAliasesList extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ConflictingAlias })
  items?: ConflictingAlias[];

  @SpeakeasyMetadata()
  maxItems?: number;

  @SpeakeasyMetadata()
  nextMarker?: string;

  @SpeakeasyMetadata()
  quantity?: number;
}
