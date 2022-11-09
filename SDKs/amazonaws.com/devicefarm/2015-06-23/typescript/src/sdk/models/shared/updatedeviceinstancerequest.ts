import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateDeviceInstanceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn: string;

  @Metadata({ data: "json, name=labels" })
  labels?: string[];

  @Metadata({ data: "json, name=profileArn" })
  profileArn?: string;
}
