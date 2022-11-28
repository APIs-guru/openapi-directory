import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RetentionIntervalUnitValuesEnum } from "./retentionintervalunitvaluesenum";



// ShareRule
/** 
 * Specifies a rule for sharing snapshots across Amazon Web Services accounts.
**/
export class ShareRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TargetAccounts" })
  targetAccounts: string[];

  @SpeakeasyMetadata({ data: "json, name=UnshareInterval" })
  unshareInterval?: number;

  @SpeakeasyMetadata({ data: "json, name=UnshareIntervalUnit" })
  unshareIntervalUnit?: RetentionIntervalUnitValuesEnum;
}
