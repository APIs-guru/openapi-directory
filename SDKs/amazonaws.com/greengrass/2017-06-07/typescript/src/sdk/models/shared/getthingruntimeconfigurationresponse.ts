import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RuntimeConfiguration } from "./runtimeconfiguration";



export class GetThingRuntimeConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RuntimeConfiguration" })
  runtimeConfiguration?: RuntimeConfiguration;
}
