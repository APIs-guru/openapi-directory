import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RuntimeConfiguration } from "./runtimeconfiguration";


export class GetThingRuntimeConfigurationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=RuntimeConfiguration" })
  runtimeConfiguration?: RuntimeConfiguration;
}
