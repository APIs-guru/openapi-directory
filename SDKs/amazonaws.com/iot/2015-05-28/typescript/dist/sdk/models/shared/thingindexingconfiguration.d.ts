import { SpeakeasyBase } from "../../../internal/utils";
import { Field } from "./field";
import { ThingConnectivityIndexingModeEnum } from "./thingconnectivityindexingmodeenum";
import { ThingIndexingModeEnum } from "./thingindexingmodeenum";
/**
 * The thing indexing configuration. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/managing-index.html">Managing Thing Indexing</a>.
**/
export declare class ThingIndexingConfiguration extends SpeakeasyBase {
    customFields?: Field[];
    managedFields?: Field[];
    thingConnectivityIndexingMode?: ThingConnectivityIndexingModeEnum;
    thingIndexingMode: ThingIndexingModeEnum;
}
