import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GlueConfiguration
/** 
 * Configuration information for coordination with Glue, a fully managed extract, transform and load (ETL) service.
**/
export class GlueConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=databaseName" })
  databaseName: string;

  @SpeakeasyMetadata({ data: "json, name=tableName" })
  tableName: string;
}
