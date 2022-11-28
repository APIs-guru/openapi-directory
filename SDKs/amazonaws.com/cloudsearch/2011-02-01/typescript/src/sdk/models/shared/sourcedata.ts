import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SourceData
/** 
 * The source attribute name and an optional default value to use if a document doesn't have an attribute of that name.
**/
export class SourceData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  defaultValue?: string;

  @SpeakeasyMetadata()
  sourceName: string;
}
