import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeProvisioningTemplateVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationDate" })
  creationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=isDefaultVersion" })
  isDefaultVersion?: boolean;

  @SpeakeasyMetadata({ data: "json, name=templateBody" })
  templateBody?: string;

  @SpeakeasyMetadata({ data: "json, name=versionId" })
  versionId?: number;
}
