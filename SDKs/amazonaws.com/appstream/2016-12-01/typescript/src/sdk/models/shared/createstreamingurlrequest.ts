import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateStreamingUrlRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationId" })
  applicationId?: string;

  @SpeakeasyMetadata({ data: "json, name=FleetName" })
  fleetName: string;

  @SpeakeasyMetadata({ data: "json, name=SessionContext" })
  sessionContext?: string;

  @SpeakeasyMetadata({ data: "json, name=StackName" })
  stackName: string;

  @SpeakeasyMetadata({ data: "json, name=UserId" })
  userId: string;

  @SpeakeasyMetadata({ data: "json, name=Validity" })
  validity?: number;
}
