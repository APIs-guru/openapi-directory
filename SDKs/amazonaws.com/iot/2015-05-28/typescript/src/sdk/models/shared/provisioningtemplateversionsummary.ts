import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ProvisioningTemplateVersionSummary
/** 
 * A summary of information about a fleet provision template version.
**/
export class ProvisioningTemplateVersionSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationDate" })
  creationDate?: Date;

  @Metadata({ data: "json, name=isDefaultVersion" })
  isDefaultVersion?: boolean;

  @Metadata({ data: "json, name=versionId" })
  versionId?: number;
}
