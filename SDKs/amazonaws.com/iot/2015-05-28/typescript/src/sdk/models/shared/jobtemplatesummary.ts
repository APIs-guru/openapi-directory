import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// JobTemplateSummary
/** 
 * An object that contains information about the job template.
**/
export class JobTemplateSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=jobTemplateArn" })
  jobTemplateArn?: string;

  @Metadata({ data: "json, name=jobTemplateId" })
  jobTemplateId?: string;
}
