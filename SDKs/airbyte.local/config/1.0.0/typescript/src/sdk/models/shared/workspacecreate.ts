import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Notification } from "./notification";


export class WorkspaceCreate extends SpeakeasyBase {
  @Metadata({ data: "json, name=anonymousDataCollection" })
  anonymousDataCollection?: boolean;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=news" })
  news?: boolean;

  @Metadata({ data: "json, name=notifications", elemType: shared.Notification })
  notifications?: Notification[];

  @Metadata({ data: "json, name=securityUpdates" })
  securityUpdates?: boolean;
}
