import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AccountQuota
/** 
 * Describes a quota for an Amazon Web Services account, for example the number of replication instances allowed.
**/
export class AccountQuota extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountQuotaName" })
  accountQuotaName?: string;

  @Metadata({ data: "json, name=Max" })
  max?: number;

  @Metadata({ data: "json, name=Used" })
  used?: number;
}
