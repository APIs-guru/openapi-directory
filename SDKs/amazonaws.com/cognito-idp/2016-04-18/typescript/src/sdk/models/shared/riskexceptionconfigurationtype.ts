import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RiskExceptionConfigurationType
/** 
 * The type of the configuration to override the risk decision.
**/
export class RiskExceptionConfigurationType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BlockedIPRangeList" })
  blockedIpRangeList?: string[];

  @SpeakeasyMetadata({ data: "json, name=SkippedIPRangeList" })
  skippedIpRangeList?: string[];
}
