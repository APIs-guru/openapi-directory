import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateSuiteDefinitionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=suiteDefinitionArn" })
  suiteDefinitionArn?: string;

  @Metadata({ data: "json, name=suiteDefinitionId" })
  suiteDefinitionId?: string;

  @Metadata({ data: "json, name=suiteDefinitionName" })
  suiteDefinitionName?: string;
}
