import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// JdbcTarget
/** 
 * Specifies a JDBC data store to crawl.
**/
export class JdbcTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConnectionName" })
  connectionName?: string;

  @Metadata({ data: "json, name=Exclusions" })
  exclusions?: string[];

  @Metadata({ data: "json, name=Path" })
  path?: string;
}
