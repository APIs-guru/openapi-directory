import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateProvisioningTemplateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=defaultVersionId" })
  defaultVersionId?: number;

  @Metadata({ data: "json, name=templateArn" })
  templateArn?: string;

  @Metadata({ data: "json, name=templateName" })
  templateName?: string;
}
