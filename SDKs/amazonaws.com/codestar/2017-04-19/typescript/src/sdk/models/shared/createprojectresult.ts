import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateProjectResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn: string;

  @Metadata({ data: "json, name=clientRequestToken" })
  clientRequestToken?: string;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=projectTemplateId" })
  projectTemplateId?: string;
}
