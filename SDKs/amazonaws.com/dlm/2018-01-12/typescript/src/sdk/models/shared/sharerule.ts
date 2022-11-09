import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RetentionIntervalUnitValuesEnum } from "./retentionintervalunitvaluesenum";


// ShareRule
/** 
 * Specifies a rule for sharing snapshots across Amazon Web Services accounts.
**/
export class ShareRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=TargetAccounts" })
  targetAccounts: string[];

  @Metadata({ data: "json, name=UnshareInterval" })
  unshareInterval?: number;

  @Metadata({ data: "json, name=UnshareIntervalUnit" })
  unshareIntervalUnit?: RetentionIntervalUnitValuesEnum;
}
