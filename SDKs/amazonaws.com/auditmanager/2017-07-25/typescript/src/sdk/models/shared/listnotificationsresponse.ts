import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Notification } from "./notification";


export class ListNotificationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=notifications", elemType: shared.Notification })
  notifications?: Notification[];
}
