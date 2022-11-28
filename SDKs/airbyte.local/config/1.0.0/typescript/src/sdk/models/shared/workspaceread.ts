import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Notification } from "./notification";



export class WorkspaceRead extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=anonymousDataCollection" })
  anonymousDataCollection?: boolean;

  @SpeakeasyMetadata({ data: "json, name=customerId" })
  customerId: string;

  @SpeakeasyMetadata({ data: "json, name=displaySetupWizard" })
  displaySetupWizard?: boolean;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=initialSetupComplete" })
  initialSetupComplete: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=news" })
  news?: boolean;

  @SpeakeasyMetadata({ data: "json, name=notifications", elemType: Notification })
  notifications?: Notification[];

  @SpeakeasyMetadata({ data: "json, name=securityUpdates" })
  securityUpdates?: boolean;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug: string;

  @SpeakeasyMetadata({ data: "json, name=workspaceId" })
  workspaceId: string;
}
