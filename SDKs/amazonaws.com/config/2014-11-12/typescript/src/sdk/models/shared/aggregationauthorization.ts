import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AggregationAuthorization
/** 
 * An object that represents the authorizations granted to aggregator accounts and regions.
**/
export class AggregationAuthorization extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AggregationAuthorizationArn" })
  aggregationAuthorizationArn?: string;

  @SpeakeasyMetadata({ data: "json, name=AuthorizedAccountId" })
  authorizedAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=AuthorizedAwsRegion" })
  authorizedAwsRegion?: string;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;
}
