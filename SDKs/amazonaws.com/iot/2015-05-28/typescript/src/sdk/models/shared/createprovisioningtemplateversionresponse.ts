import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateProvisioningTemplateVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isDefaultVersion" })
  isDefaultVersion?: boolean;

  @SpeakeasyMetadata({ data: "json, name=templateArn" })
  templateArn?: string;

  @SpeakeasyMetadata({ data: "json, name=templateName" })
  templateName?: string;

  @SpeakeasyMetadata({ data: "json, name=versionId" })
  versionId?: number;
}
