import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateDeviceInstanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: string[];

  @SpeakeasyMetadata({ data: "json, name=profileArn" })
  profileArn?: string;
}
