import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VpceConfiguration } from "./vpceconfiguration";


export class UpdateVpceConfigurationResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=vpceConfiguration" })
  vpceConfiguration?: VpceConfiguration;
}
