import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Subscriber } from "./subscriber";


// DescribeSubscribersForNotificationResponse
/** 
 *  Response of DescribeSubscribersForNotification 
**/
export class DescribeSubscribersForNotificationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Subscribers", elemType: shared.Subscriber })
  subscribers?: Subscriber[];
}
