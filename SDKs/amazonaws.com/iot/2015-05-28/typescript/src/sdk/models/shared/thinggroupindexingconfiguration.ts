import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Field } from "./field";
import { Field } from "./field";
import { ThingGroupIndexingModeEnum } from "./thinggroupindexingmodeenum";


// ThingGroupIndexingConfiguration
/** 
 * Thing group indexing configuration.
**/
export class ThingGroupIndexingConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=customFields", elemType: shared.Field })
  customFields?: Field[];

  @Metadata({ data: "json, name=managedFields", elemType: shared.Field })
  managedFields?: Field[];

  @Metadata({ data: "json, name=thingGroupIndexingMode" })
  thingGroupIndexingMode: ThingGroupIndexingModeEnum;
}
