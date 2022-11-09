import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApplicationStatusEnum } from "./applicationstatusenum";


export class NotifyApplicationStateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationId" })
  applicationId: string;

  @Metadata({ data: "json, name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "json, name=Status" })
  status: ApplicationStatusEnum;

  @Metadata({ data: "json, name=UpdateDateTime" })
  updateDateTime?: Date;
}
