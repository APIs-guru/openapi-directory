import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SalesforceSourceProperties
/** 
 * The properties that are applied when Salesforce is being used as a source.
**/
export class SalesforceSourceProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=EnableDynamicFieldUpdate" })
  enableDynamicFieldUpdate?: boolean;

  @Metadata({ data: "json, name=IncludeDeletedRecords" })
  includeDeletedRecords?: boolean;

  @Metadata({ data: "json, name=Object" })
  object: string;
}
