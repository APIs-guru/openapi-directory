import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SuiteDefinitionConfiguration } from "./suitedefinitionconfiguration";


export class GetSuiteDefinitionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=lastModifiedAt" })
  lastModifiedAt?: Date;

  @Metadata({ data: "json, name=latestVersion" })
  latestVersion?: string;

  @Metadata({ data: "json, name=suiteDefinitionArn" })
  suiteDefinitionArn?: string;

  @Metadata({ data: "json, name=suiteDefinitionConfiguration" })
  suiteDefinitionConfiguration?: SuiteDefinitionConfiguration;

  @Metadata({ data: "json, name=suiteDefinitionId" })
  suiteDefinitionId?: string;

  @Metadata({ data: "json, name=suiteDefinitionVersion" })
  suiteDefinitionVersion?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
