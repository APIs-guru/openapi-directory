import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// JdbcTarget
/** 
 * Specifies a JDBC data store to crawl.
**/
export class JdbcTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConnectionName" })
  connectionName?: string;

  @SpeakeasyMetadata({ data: "json, name=Exclusions" })
  exclusions?: string[];

  @SpeakeasyMetadata({ data: "json, name=Path" })
  path?: string;
}
