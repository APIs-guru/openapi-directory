import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AirbyteCatalog } from "./airbytecatalog";
import { SynchronousJobRead } from "./synchronousjobread";



// SourceDiscoverSchemaRead
/** 
 * Returns the results of a discover catalog job. If the job was not successful, the catalog field will not be present. jobInfo will aways be present and its status be used to determine if the job was successful or not.
**/
export class SourceDiscoverSchemaRead extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=catalog" })
  catalog?: AirbyteCatalog;

  @SpeakeasyMetadata({ data: "json, name=jobInfo" })
  jobInfo: SynchronousJobRead;
}
