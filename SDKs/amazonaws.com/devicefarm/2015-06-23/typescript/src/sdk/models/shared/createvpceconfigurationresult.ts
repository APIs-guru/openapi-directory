import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VpceConfiguration } from "./vpceconfiguration";



export class CreateVpceConfigurationResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=vpceConfiguration" })
  vpceConfiguration?: VpceConfiguration;
}
