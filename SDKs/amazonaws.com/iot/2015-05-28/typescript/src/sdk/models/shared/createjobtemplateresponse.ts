import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateJobTemplateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=jobTemplateArn" })
  jobTemplateArn?: string;

  @Metadata({ data: "json, name=jobTemplateId" })
  jobTemplateId?: string;
}
