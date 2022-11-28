import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateSuiteDefinitionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedAt" })
  lastUpdatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=suiteDefinitionArn" })
  suiteDefinitionArn?: string;

  @SpeakeasyMetadata({ data: "json, name=suiteDefinitionId" })
  suiteDefinitionId?: string;

  @SpeakeasyMetadata({ data: "json, name=suiteDefinitionName" })
  suiteDefinitionName?: string;

  @SpeakeasyMetadata({ data: "json, name=suiteDefinitionVersion" })
  suiteDefinitionVersion?: string;
}
