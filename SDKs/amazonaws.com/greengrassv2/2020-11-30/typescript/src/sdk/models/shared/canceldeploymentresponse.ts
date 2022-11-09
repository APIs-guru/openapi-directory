import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CancelDeploymentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}
