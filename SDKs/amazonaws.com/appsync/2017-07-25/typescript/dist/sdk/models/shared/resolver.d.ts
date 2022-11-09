import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CachingConfig } from "./cachingconfig";
import { ResolverKindEnum } from "./resolverkindenum";
import { PipelineConfig } from "./pipelineconfig";
import { SyncConfig } from "./syncconfig";
/**
 * Describes a resolver.
**/
export declare class Resolver extends SpeakeasyBase {
    cachingConfig?: CachingConfig;
    dataSourceName?: string;
    fieldName?: string;
    kind?: ResolverKindEnum;
    pipelineConfig?: PipelineConfig;
    requestMappingTemplate?: string;
    resolverArn?: string;
    responseMappingTemplate?: string;
    syncConfig?: SyncConfig;
    typeName?: string;
}
