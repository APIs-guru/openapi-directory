import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PauseServiceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ServiceArn" })
  serviceArn: string;
}
