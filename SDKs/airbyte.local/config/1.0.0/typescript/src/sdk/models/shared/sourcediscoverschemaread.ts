import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AirbyteCatalog } from "./airbytecatalog";
import { SynchronousJobRead } from "./synchronousjobread";


// SourceDiscoverSchemaRead
/** 
 * Returns the results of a discover catalog job. If the job was not successful, the catalog field will not be present. jobInfo will aways be present and its status be used to determine if the job was successful or not.
**/
export class SourceDiscoverSchemaRead extends SpeakeasyBase {
  @Metadata({ data: "json, name=catalog" })
  catalog?: AirbyteCatalog;

  @Metadata({ data: "json, name=jobInfo" })
  jobInfo: SynchronousJobRead;
}
