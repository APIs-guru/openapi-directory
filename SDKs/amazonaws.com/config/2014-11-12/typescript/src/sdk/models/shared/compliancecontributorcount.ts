import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ComplianceContributorCount
/** 
 * The number of Amazon Web Services resources or Config rules responsible for the current compliance of the item, up to a maximum number.
**/
export class ComplianceContributorCount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CapExceeded" })
  capExceeded?: boolean;

  @SpeakeasyMetadata({ data: "json, name=CappedCount" })
  cappedCount?: number;
}
