import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IncrementalPullConfig
/** 
 * Specifies the configuration used when importing incremental records from the source.
**/
export class IncrementalPullConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=DatetimeTypeFieldName" })
  datetimeTypeFieldName?: string;
}
