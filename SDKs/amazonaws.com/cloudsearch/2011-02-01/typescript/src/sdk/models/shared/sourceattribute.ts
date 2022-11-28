import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SourceData } from "./sourcedata";
import { SourceDataFunctionEnum } from "./sourcedatafunctionenum";
import { SourceDataMap } from "./sourcedatamap";
import { SourceDataTrimTitle } from "./sourcedatatrimtitle";



// SourceAttribute
/** 
 * Identifies the source data for an index field. An optional data transformation can be applied to the source data when populating the index field. By default, the value of the source attribute is copied to the index field.
**/
export class SourceAttribute extends SpeakeasyBase {
  @SpeakeasyMetadata()
  sourceDataCopy?: SourceData;

  @SpeakeasyMetadata()
  sourceDataFunction: SourceDataFunctionEnum;

  @SpeakeasyMetadata()
  sourceDataMap?: SourceDataMap;

  @SpeakeasyMetadata()
  sourceDataTrimTitle?: SourceDataTrimTitle;
}
