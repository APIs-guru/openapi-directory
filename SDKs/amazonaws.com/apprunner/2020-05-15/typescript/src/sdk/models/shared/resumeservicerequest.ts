import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ResumeServiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ServiceArn" })
  serviceArn: string;
}
