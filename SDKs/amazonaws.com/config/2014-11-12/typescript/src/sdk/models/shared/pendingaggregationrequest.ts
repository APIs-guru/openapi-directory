import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PendingAggregationRequest
/** 
 * An object that represents the account ID and region of an aggregator account that is requesting authorization but is not yet authorized.
**/
export class PendingAggregationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RequesterAccountId" })
  requesterAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=RequesterAwsRegion" })
  requesterAwsRegion?: string;
}
