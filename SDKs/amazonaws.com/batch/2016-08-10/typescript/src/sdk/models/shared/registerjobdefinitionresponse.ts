import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegisterJobDefinitionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=jobDefinitionArn" })
  jobDefinitionArn: string;

  @Metadata({ data: "json, name=jobDefinitionName" })
  jobDefinitionName: string;

  @Metadata({ data: "json, name=revision" })
  revision: number;
}
