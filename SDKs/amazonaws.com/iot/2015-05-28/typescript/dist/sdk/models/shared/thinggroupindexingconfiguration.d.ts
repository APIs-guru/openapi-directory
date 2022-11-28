import { SpeakeasyBase } from "../../../internal/utils";
import { Field } from "./field";
import { ThingGroupIndexingModeEnum } from "./thinggroupindexingmodeenum";
/**
 * Thing group indexing configuration.
**/
export declare class ThingGroupIndexingConfiguration extends SpeakeasyBase {
    customFields?: Field[];
    managedFields?: Field[];
    thingGroupIndexingMode: ThingGroupIndexingModeEnum;
}
