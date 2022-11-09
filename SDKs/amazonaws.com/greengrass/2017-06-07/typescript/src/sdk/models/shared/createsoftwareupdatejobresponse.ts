import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateSoftwareUpdateJobResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=IotJobArn" })
  iotJobArn?: string;

  @Metadata({ data: "json, name=IotJobId" })
  iotJobId?: string;

  @Metadata({ data: "json, name=PlatformSoftwareVersion" })
  platformSoftwareVersion?: string;
}
