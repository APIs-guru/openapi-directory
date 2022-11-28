import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateSuiteDefinitionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=suiteDefinitionArn" })
  suiteDefinitionArn?: string;

  @SpeakeasyMetadata({ data: "json, name=suiteDefinitionId" })
  suiteDefinitionId?: string;

  @SpeakeasyMetadata({ data: "json, name=suiteDefinitionName" })
  suiteDefinitionName?: string;
}
