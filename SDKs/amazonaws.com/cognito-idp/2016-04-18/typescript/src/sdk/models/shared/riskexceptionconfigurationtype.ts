import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RiskExceptionConfigurationType
/** 
 * The type of the configuration to override the risk decision.
**/
export class RiskExceptionConfigurationType extends SpeakeasyBase {
  @Metadata({ data: "json, name=BlockedIPRangeList" })
  blockedIpRangeList?: string[];

  @Metadata({ data: "json, name=SkippedIPRangeList" })
  skippedIpRangeList?: string[];
}
