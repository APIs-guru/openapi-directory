import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SourceDataTrimTitle
/** 
 * Specifies how to trim common words from the beginning of a field to enable title sorting by that field.
**/
export class SourceDataTrimTitle extends SpeakeasyBase {
  @SpeakeasyMetadata()
  defaultValue?: string;

  @SpeakeasyMetadata()
  language?: string;

  @SpeakeasyMetadata()
  separator?: string;

  @SpeakeasyMetadata()
  sourceName: string;
}
