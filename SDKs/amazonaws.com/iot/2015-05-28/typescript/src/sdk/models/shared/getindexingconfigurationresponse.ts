import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ThingGroupIndexingConfiguration } from "./thinggroupindexingconfiguration";
import { ThingIndexingConfiguration } from "./thingindexingconfiguration";


export class GetIndexingConfigurationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=thingGroupIndexingConfiguration" })
  thingGroupIndexingConfiguration?: ThingGroupIndexingConfiguration;

  @Metadata({ data: "json, name=thingIndexingConfiguration" })
  thingIndexingConfiguration?: ThingIndexingConfiguration;
}
