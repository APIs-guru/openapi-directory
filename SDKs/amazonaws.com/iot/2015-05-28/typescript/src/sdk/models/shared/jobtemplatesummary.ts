import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// JobTemplateSummary
/** 
 * An object that contains information about the job template.
**/
export class JobTemplateSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=jobTemplateArn" })
  jobTemplateArn?: string;

  @SpeakeasyMetadata({ data: "json, name=jobTemplateId" })
  jobTemplateId?: string;
}
