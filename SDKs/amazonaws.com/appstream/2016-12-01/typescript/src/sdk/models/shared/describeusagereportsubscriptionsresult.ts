import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UsageReportSubscription } from "./usagereportsubscription";



export class DescribeUsageReportSubscriptionsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=UsageReportSubscriptions", elemType: UsageReportSubscription })
  usageReportSubscriptions?: UsageReportSubscription[];
}
