import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateJobTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=jobTemplateArn" })
  jobTemplateArn?: string;

  @SpeakeasyMetadata({ data: "json, name=jobTemplateId" })
  jobTemplateId?: string;
}
