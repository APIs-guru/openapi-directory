import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ProvisioningTemplateSummary
/** 
 * A summary of information about a fleet provisioning template.
**/
export class ProvisioningTemplateSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationDate" })
  creationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=lastModifiedDate" })
  lastModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=templateArn" })
  templateArn?: string;

  @SpeakeasyMetadata({ data: "json, name=templateName" })
  templateName?: string;
}
