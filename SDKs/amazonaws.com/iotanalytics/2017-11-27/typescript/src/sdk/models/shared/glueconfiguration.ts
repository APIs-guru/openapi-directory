import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GlueConfiguration
/** 
 * Configuration information for coordination with Glue, a fully managed extract, transform and load (ETL) service.
**/
export class GlueConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=databaseName" })
  databaseName: string;

  @Metadata({ data: "json, name=tableName" })
  tableName: string;
}
