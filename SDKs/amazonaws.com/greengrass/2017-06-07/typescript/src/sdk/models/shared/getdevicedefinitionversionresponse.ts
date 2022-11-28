import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeviceDefinitionVersion } from "./devicedefinitionversion";



export class GetDeviceDefinitionVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=CreationTimestamp" })
  creationTimestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=Definition" })
  definition?: DeviceDefinitionVersion;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version?: string;
}
