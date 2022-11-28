import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApplicationStatusEnum } from "./applicationstatusenum";



export class NotifyApplicationStateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationId" })
  applicationId: string;

  @SpeakeasyMetadata({ data: "json, name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status: ApplicationStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=UpdateDateTime" })
  updateDateTime?: Date;
}
