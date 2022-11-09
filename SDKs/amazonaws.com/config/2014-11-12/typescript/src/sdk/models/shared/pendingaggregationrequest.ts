import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PendingAggregationRequest
/** 
 * An object that represents the account ID and region of an aggregator account that is requesting authorization but is not yet authorized.
**/
export class PendingAggregationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=RequesterAccountId" })
  requesterAccountId?: string;

  @Metadata({ data: "json, name=RequesterAwsRegion" })
  requesterAwsRegion?: string;
}
