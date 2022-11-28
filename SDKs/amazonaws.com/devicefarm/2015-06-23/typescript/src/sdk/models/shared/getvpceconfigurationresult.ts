import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VpceConfiguration } from "./vpceconfiguration";



export class GetVpceConfigurationResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=vpceConfiguration" })
  vpceConfiguration?: VpceConfiguration;
}
