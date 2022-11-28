import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CachingConfig } from "./cachingconfig";
import { ResolverKindEnum } from "./resolverkindenum";
import { PipelineConfig } from "./pipelineconfig";
import { SyncConfig } from "./syncconfig";



// Resolver
/** 
 * Describes a resolver.
**/
export class Resolver extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cachingConfig" })
  cachingConfig?: CachingConfig;

  @SpeakeasyMetadata({ data: "json, name=dataSourceName" })
  dataSourceName?: string;

  @SpeakeasyMetadata({ data: "json, name=fieldName" })
  fieldName?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: ResolverKindEnum;

  @SpeakeasyMetadata({ data: "json, name=pipelineConfig" })
  pipelineConfig?: PipelineConfig;

  @SpeakeasyMetadata({ data: "json, name=requestMappingTemplate" })
  requestMappingTemplate?: string;

  @SpeakeasyMetadata({ data: "json, name=resolverArn" })
  resolverArn?: string;

  @SpeakeasyMetadata({ data: "json, name=responseMappingTemplate" })
  responseMappingTemplate?: string;

  @SpeakeasyMetadata({ data: "json, name=syncConfig" })
  syncConfig?: SyncConfig;

  @SpeakeasyMetadata({ data: "json, name=typeName" })
  typeName?: string;
}
