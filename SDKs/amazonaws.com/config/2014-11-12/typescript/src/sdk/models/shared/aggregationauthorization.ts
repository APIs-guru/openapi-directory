import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AggregationAuthorization
/** 
 * An object that represents the authorizations granted to aggregator accounts and regions.
**/
export class AggregationAuthorization extends SpeakeasyBase {
  @Metadata({ data: "json, name=AggregationAuthorizationArn" })
  aggregationAuthorizationArn?: string;

  @Metadata({ data: "json, name=AuthorizedAccountId" })
  authorizedAccountId?: string;

  @Metadata({ data: "json, name=AuthorizedAwsRegion" })
  authorizedAwsRegion?: string;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;
}
