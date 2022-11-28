import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Database
/** 
 * Contains metadata information for a database in a data catalog.
**/
export class Database extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=Parameters" })
  parameters?: Map<string, string>;
}
