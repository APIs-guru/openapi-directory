import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UsageReportSubscription } from "./usagereportsubscription";


export class DescribeUsageReportSubscriptionsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=UsageReportSubscriptions", elemType: shared.UsageReportSubscription })
  usageReportSubscriptions?: UsageReportSubscription[];
}
