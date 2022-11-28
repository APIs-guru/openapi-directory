import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VpceConfiguration } from "./vpceconfiguration";



export class UpdateVpceConfigurationResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=vpceConfiguration" })
  vpceConfiguration?: VpceConfiguration;
}
