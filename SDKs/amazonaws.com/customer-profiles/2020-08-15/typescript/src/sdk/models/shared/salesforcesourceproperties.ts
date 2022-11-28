import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SalesforceSourceProperties
/** 
 * The properties that are applied when Salesforce is being used as a source.
**/
export class SalesforceSourceProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EnableDynamicFieldUpdate" })
  enableDynamicFieldUpdate?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IncludeDeletedRecords" })
  includeDeletedRecords?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Object" })
  object: string;
}
