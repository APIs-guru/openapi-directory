import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateProjectResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn: string;

  @SpeakeasyMetadata({ data: "json, name=clientRequestToken" })
  clientRequestToken?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=projectTemplateId" })
  projectTemplateId?: string;
}
