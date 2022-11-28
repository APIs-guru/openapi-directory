import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MappingEntry
/** 
 * Defines a mapping.
**/
export class MappingEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SourcePath" })
  sourcePath?: string;

  @SpeakeasyMetadata({ data: "json, name=SourceTable" })
  sourceTable?: string;

  @SpeakeasyMetadata({ data: "json, name=SourceType" })
  sourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=TargetPath" })
  targetPath?: string;

  @SpeakeasyMetadata({ data: "json, name=TargetTable" })
  targetTable?: string;

  @SpeakeasyMetadata({ data: "json, name=TargetType" })
  targetType?: string;
}
