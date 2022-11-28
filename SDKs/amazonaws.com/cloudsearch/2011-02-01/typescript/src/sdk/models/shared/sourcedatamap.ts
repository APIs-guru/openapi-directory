import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SourceDataMap
/** 
 * Specifies how to map source attribute values to custom values when populating an <code>IndexField</code>.
**/
export class SourceDataMap extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cases?: Map<string, string>;

  @SpeakeasyMetadata()
  defaultValue?: string;

  @SpeakeasyMetadata()
  sourceName: string;
}
