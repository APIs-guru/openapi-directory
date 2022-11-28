import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ProvisioningTemplateVersionSummary
/** 
 * A summary of information about a fleet provision template version.
**/
export class ProvisioningTemplateVersionSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationDate" })
  creationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=isDefaultVersion" })
  isDefaultVersion?: boolean;

  @SpeakeasyMetadata({ data: "json, name=versionId" })
  versionId?: number;
}
