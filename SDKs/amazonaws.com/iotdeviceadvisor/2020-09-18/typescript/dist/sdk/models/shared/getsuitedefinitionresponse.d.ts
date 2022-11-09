import { SpeakeasyBase } from "../../../internal/utils/utils";
import { SuiteDefinitionConfiguration } from "./suitedefinitionconfiguration";
export declare class GetSuiteDefinitionResponse extends SpeakeasyBase {
    createdAt?: Date;
    lastModifiedAt?: Date;
    latestVersion?: string;
    suiteDefinitionArn?: string;
    suiteDefinitionConfiguration?: SuiteDefinitionConfiguration;
    suiteDefinitionId?: string;
    suiteDefinitionVersion?: string;
    tags?: Map<string, string>;
}
