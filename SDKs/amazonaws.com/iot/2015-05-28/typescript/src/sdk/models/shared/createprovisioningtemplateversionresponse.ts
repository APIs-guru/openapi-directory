import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateProvisioningTemplateVersionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=isDefaultVersion" })
  isDefaultVersion?: boolean;

  @Metadata({ data: "json, name=templateArn" })
  templateArn?: string;

  @Metadata({ data: "json, name=templateName" })
  templateName?: string;

  @Metadata({ data: "json, name=versionId" })
  versionId?: number;
}
