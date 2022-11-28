import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Field } from "./field";
import { ThingGroupIndexingModeEnum } from "./thinggroupindexingmodeenum";



// ThingGroupIndexingConfiguration
/** 
 * Thing group indexing configuration.
**/
export class ThingGroupIndexingConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customFields", elemType: Field })
  customFields?: Field[];

  @SpeakeasyMetadata({ data: "json, name=managedFields", elemType: Field })
  managedFields?: Field[];

  @SpeakeasyMetadata({ data: "json, name=thingGroupIndexingMode" })
  thingGroupIndexingMode: ThingGroupIndexingModeEnum;
}
