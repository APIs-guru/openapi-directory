import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProvisioningHook } from "./provisioninghook";


export class DescribeProvisioningTemplateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationDate" })
  creationDate?: Date;

  @Metadata({ data: "json, name=defaultVersionId" })
  defaultVersionId?: number;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=lastModifiedDate" })
  lastModifiedDate?: Date;

  @Metadata({ data: "json, name=preProvisioningHook" })
  preProvisioningHook?: ProvisioningHook;

  @Metadata({ data: "json, name=provisioningRoleArn" })
  provisioningRoleArn?: string;

  @Metadata({ data: "json, name=templateArn" })
  templateArn?: string;

  @Metadata({ data: "json, name=templateBody" })
  templateBody?: string;

  @Metadata({ data: "json, name=templateName" })
  templateName?: string;
}
