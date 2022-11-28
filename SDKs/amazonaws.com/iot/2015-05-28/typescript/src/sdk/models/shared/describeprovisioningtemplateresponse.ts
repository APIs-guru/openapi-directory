import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProvisioningHook } from "./provisioninghook";



export class DescribeProvisioningTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationDate" })
  creationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=defaultVersionId" })
  defaultVersionId?: number;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=lastModifiedDate" })
  lastModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=preProvisioningHook" })
  preProvisioningHook?: ProvisioningHook;

  @SpeakeasyMetadata({ data: "json, name=provisioningRoleArn" })
  provisioningRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=templateArn" })
  templateArn?: string;

  @SpeakeasyMetadata({ data: "json, name=templateBody" })
  templateBody?: string;

  @SpeakeasyMetadata({ data: "json, name=templateName" })
  templateName?: string;
}
