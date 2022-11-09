import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CloudComponentStatus } from "./cloudcomponentstatus";


export class CreateComponentVersionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=componentName" })
  componentName: string;

  @Metadata({ data: "json, name=componentVersion" })
  componentVersion: string;

  @Metadata({ data: "json, name=creationTimestamp" })
  creationTimestamp: Date;

  @Metadata({ data: "json, name=status" })
  status: CloudComponentStatus;
}
