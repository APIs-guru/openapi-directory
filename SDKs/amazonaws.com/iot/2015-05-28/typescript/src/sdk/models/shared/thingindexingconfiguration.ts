import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Field } from "./field";
import { Field } from "./field";
import { ThingConnectivityIndexingModeEnum } from "./thingconnectivityindexingmodeenum";
import { ThingIndexingModeEnum } from "./thingindexingmodeenum";


// ThingIndexingConfiguration
/** 
 * The thing indexing configuration. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/managing-index.html">Managing Thing Indexing</a>.
**/
export class ThingIndexingConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=customFields", elemType: shared.Field })
  customFields?: Field[];

  @Metadata({ data: "json, name=managedFields", elemType: shared.Field })
  managedFields?: Field[];

  @Metadata({ data: "json, name=thingConnectivityIndexingMode" })
  thingConnectivityIndexingMode?: ThingConnectivityIndexingModeEnum;

  @Metadata({ data: "json, name=thingIndexingMode" })
  thingIndexingMode: ThingIndexingModeEnum;
}
