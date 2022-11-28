import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ThingGroupIndexingConfiguration } from "./thinggroupindexingconfiguration";
import { ThingIndexingConfiguration } from "./thingindexingconfiguration";



export class GetIndexingConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=thingGroupIndexingConfiguration" })
  thingGroupIndexingConfiguration?: ThingGroupIndexingConfiguration;

  @SpeakeasyMetadata({ data: "json, name=thingIndexingConfiguration" })
  thingIndexingConfiguration?: ThingIndexingConfiguration;
}
