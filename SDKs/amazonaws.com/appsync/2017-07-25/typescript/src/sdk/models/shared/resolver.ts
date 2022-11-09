import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CachingConfig } from "./cachingconfig";
import { ResolverKindEnum } from "./resolverkindenum";
import { PipelineConfig } from "./pipelineconfig";
import { SyncConfig } from "./syncconfig";


// Resolver
/** 
 * Describes a resolver.
**/
export class Resolver extends SpeakeasyBase {
  @Metadata({ data: "json, name=cachingConfig" })
  cachingConfig?: CachingConfig;

  @Metadata({ data: "json, name=dataSourceName" })
  dataSourceName?: string;

  @Metadata({ data: "json, name=fieldName" })
  fieldName?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: ResolverKindEnum;

  @Metadata({ data: "json, name=pipelineConfig" })
  pipelineConfig?: PipelineConfig;

  @Metadata({ data: "json, name=requestMappingTemplate" })
  requestMappingTemplate?: string;

  @Metadata({ data: "json, name=resolverArn" })
  resolverArn?: string;

  @Metadata({ data: "json, name=responseMappingTemplate" })
  responseMappingTemplate?: string;

  @Metadata({ data: "json, name=syncConfig" })
  syncConfig?: SyncConfig;

  @Metadata({ data: "json, name=typeName" })
  typeName?: string;
}
