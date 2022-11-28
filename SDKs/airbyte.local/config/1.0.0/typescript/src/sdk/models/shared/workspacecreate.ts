import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Notification } from "./notification";



export class WorkspaceCreate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=anonymousDataCollection" })
  anonymousDataCollection?: boolean;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=news" })
  news?: boolean;

  @SpeakeasyMetadata({ data: "json, name=notifications", elemType: Notification })
  notifications?: Notification[];

  @SpeakeasyMetadata({ data: "json, name=securityUpdates" })
  securityUpdates?: boolean;
}
