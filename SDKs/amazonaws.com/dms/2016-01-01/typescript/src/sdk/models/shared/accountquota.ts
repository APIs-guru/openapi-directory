import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AccountQuota
/** 
 * Describes a quota for an Amazon Web Services account, for example the number of replication instances allowed.
**/
export class AccountQuota extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountQuotaName" })
  accountQuotaName?: string;

  @SpeakeasyMetadata({ data: "json, name=Max" })
  max?: number;

  @SpeakeasyMetadata({ data: "json, name=Used" })
  used?: number;
}
