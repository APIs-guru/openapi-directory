import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateSoftwareUpdateJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IotJobArn" })
  iotJobArn?: string;

  @SpeakeasyMetadata({ data: "json, name=IotJobId" })
  iotJobId?: string;

  @SpeakeasyMetadata({ data: "json, name=PlatformSoftwareVersion" })
  platformSoftwareVersion?: string;
}
