import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CancelDeploymentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}
