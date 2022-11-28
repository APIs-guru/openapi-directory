import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IncrementalPullConfig
/** 
 *  Specifies the configuration used when importing incremental records from the source. 
**/
export class IncrementalPullConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=datetimeTypeFieldName" })
  datetimeTypeFieldName?: string;
}
