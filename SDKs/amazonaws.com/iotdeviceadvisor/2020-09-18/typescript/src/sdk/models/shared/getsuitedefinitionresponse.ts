import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SuiteDefinitionConfiguration } from "./suitedefinitionconfiguration";



export class GetSuiteDefinitionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=lastModifiedAt" })
  lastModifiedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=latestVersion" })
  latestVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=suiteDefinitionArn" })
  suiteDefinitionArn?: string;

  @SpeakeasyMetadata({ data: "json, name=suiteDefinitionConfiguration" })
  suiteDefinitionConfiguration?: SuiteDefinitionConfiguration;

  @SpeakeasyMetadata({ data: "json, name=suiteDefinitionId" })
  suiteDefinitionId?: string;

  @SpeakeasyMetadata({ data: "json, name=suiteDefinitionVersion" })
  suiteDefinitionVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
