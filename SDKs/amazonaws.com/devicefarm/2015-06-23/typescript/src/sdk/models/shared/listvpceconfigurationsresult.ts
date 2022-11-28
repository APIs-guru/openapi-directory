import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VpceConfiguration } from "./vpceconfiguration";



export class ListVpceConfigurationsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=vpceConfigurations", elemType: VpceConfiguration })
  vpceConfigurations?: VpceConfiguration[];
}
