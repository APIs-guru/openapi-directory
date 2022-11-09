import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MappingEntry
/** 
 * Defines a mapping.
**/
export class MappingEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=SourcePath" })
  sourcePath?: string;

  @Metadata({ data: "json, name=SourceTable" })
  sourceTable?: string;

  @Metadata({ data: "json, name=SourceType" })
  sourceType?: string;

  @Metadata({ data: "json, name=TargetPath" })
  targetPath?: string;

  @Metadata({ data: "json, name=TargetTable" })
  targetTable?: string;

  @Metadata({ data: "json, name=TargetType" })
  targetType?: string;
}
