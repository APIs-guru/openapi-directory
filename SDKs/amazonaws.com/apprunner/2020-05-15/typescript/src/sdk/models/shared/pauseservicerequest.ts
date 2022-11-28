import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PauseServiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ServiceArn" })
  serviceArn: string;
}
