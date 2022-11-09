import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ProvisioningTemplateSummary
/** 
 * A summary of information about a fleet provisioning template.
**/
export class ProvisioningTemplateSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationDate" })
  creationDate?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=lastModifiedDate" })
  lastModifiedDate?: Date;

  @Metadata({ data: "json, name=templateArn" })
  templateArn?: string;

  @Metadata({ data: "json, name=templateName" })
  templateName?: string;
}
