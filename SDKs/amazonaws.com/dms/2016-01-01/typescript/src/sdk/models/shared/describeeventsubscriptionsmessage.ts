import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Filter } from "./filter";


// DescribeEventSubscriptionsMessage
/** 
 * <p/>
**/
export class DescribeEventSubscriptionsMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=Filters", elemType: shared.Filter })
  filters?: Filter[];

  @Metadata({ data: "json, name=Marker" })
  marker?: string;

  @Metadata({ data: "json, name=MaxRecords" })
  maxRecords?: number;

  @Metadata({ data: "json, name=SubscriptionName" })
  subscriptionName?: string;
}
