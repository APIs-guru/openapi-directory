import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateStreamingUrlRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationId" })
  applicationId?: string;

  @Metadata({ data: "json, name=FleetName" })
  fleetName: string;

  @Metadata({ data: "json, name=SessionContext" })
  sessionContext?: string;

  @Metadata({ data: "json, name=StackName" })
  stackName: string;

  @Metadata({ data: "json, name=UserId" })
  userId: string;

  @Metadata({ data: "json, name=Validity" })
  validity?: number;
}
