import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Database
/** 
 * Contains metadata information for a database in a data catalog.
**/
export class Database extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=Parameters" })
  parameters?: Map<string, string>;
}
