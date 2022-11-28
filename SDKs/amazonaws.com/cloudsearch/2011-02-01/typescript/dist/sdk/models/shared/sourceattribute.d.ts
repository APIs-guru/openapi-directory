import { SpeakeasyBase } from "../../../internal/utils";
import { SourceData } from "./sourcedata";
import { SourceDataFunctionEnum } from "./sourcedatafunctionenum";
import { SourceDataMap } from "./sourcedatamap";
import { SourceDataTrimTitle } from "./sourcedatatrimtitle";
/**
 * Identifies the source data for an index field. An optional data transformation can be applied to the source data when populating the index field. By default, the value of the source attribute is copied to the index field.
**/
export declare class SourceAttribute extends SpeakeasyBase {
    sourceDataCopy?: SourceData;
    sourceDataFunction: SourceDataFunctionEnum;
    sourceDataMap?: SourceDataMap;
    sourceDataTrimTitle?: SourceDataTrimTitle;
}
