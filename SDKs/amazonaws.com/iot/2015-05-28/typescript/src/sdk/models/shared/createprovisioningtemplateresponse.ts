import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateProvisioningTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultVersionId" })
  defaultVersionId?: number;

  @SpeakeasyMetadata({ data: "json, name=templateArn" })
  templateArn?: string;

  @SpeakeasyMetadata({ data: "json, name=templateName" })
  templateName?: string;
}
