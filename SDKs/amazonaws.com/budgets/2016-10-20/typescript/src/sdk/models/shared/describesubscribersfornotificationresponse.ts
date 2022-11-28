import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Subscriber } from "./subscriber";



// DescribeSubscribersForNotificationResponse
/** 
 *  Response of DescribeSubscribersForNotification 
**/
export class DescribeSubscribersForNotificationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Subscribers", elemType: Subscriber })
  subscribers?: Subscriber[];
}
