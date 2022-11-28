import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Field } from "./field";
import { ThingConnectivityIndexingModeEnum } from "./thingconnectivityindexingmodeenum";
import { ThingIndexingModeEnum } from "./thingindexingmodeenum";



// ThingIndexingConfiguration
/** 
 * The thing indexing configuration. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/managing-index.html">Managing Thing Indexing</a>.
**/
export class ThingIndexingConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customFields", elemType: Field })
  customFields?: Field[];

  @SpeakeasyMetadata({ data: "json, name=managedFields", elemType: Field })
  managedFields?: Field[];

  @SpeakeasyMetadata({ data: "json, name=thingConnectivityIndexingMode" })
  thingConnectivityIndexingMode?: ThingConnectivityIndexingModeEnum;

  @SpeakeasyMetadata({ data: "json, name=thingIndexingMode" })
  thingIndexingMode: ThingIndexingModeEnum;
}
