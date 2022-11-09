import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeProvisioningTemplateVersionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationDate" })
  creationDate?: Date;

  @Metadata({ data: "json, name=isDefaultVersion" })
  isDefaultVersion?: boolean;

  @Metadata({ data: "json, name=templateBody" })
  templateBody?: string;

  @Metadata({ data: "json, name=versionId" })
  versionId?: number;
}
