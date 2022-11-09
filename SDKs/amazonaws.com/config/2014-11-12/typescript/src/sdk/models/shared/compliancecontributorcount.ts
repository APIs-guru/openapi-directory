import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ComplianceContributorCount
/** 
 * The number of Amazon Web Services resources or Config rules responsible for the current compliance of the item, up to a maximum number.
**/
export class ComplianceContributorCount extends SpeakeasyBase {
  @Metadata({ data: "json, name=CapExceeded" })
  capExceeded?: boolean;

  @Metadata({ data: "json, name=CappedCount" })
  cappedCount?: number;
}
