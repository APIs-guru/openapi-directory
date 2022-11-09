import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CodeConfiguration } from "./codeconfiguration";
import { SourceCodeVersion } from "./sourcecodeversion";
/**
 * Describes a source code repository.
**/
export declare class CodeRepository extends SpeakeasyBase {
    codeConfiguration?: CodeConfiguration;
    repositoryUrl: string;
    sourceCodeVersion: SourceCodeVersion;
}
