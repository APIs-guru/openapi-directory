import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloudComponentStatus } from "./cloudcomponentstatus";



export class CreateComponentVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=componentName" })
  componentName: string;

  @SpeakeasyMetadata({ data: "json, name=componentVersion" })
  componentVersion: string;

  @SpeakeasyMetadata({ data: "json, name=creationTimestamp" })
  creationTimestamp: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: CloudComponentStatus;
}
