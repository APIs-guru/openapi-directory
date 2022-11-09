import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ResumeServiceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ServiceArn" })
  serviceArn: string;
}
