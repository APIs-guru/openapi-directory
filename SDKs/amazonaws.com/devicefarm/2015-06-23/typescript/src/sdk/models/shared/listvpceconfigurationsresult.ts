import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { VpceConfiguration } from "./vpceconfiguration";


export class ListVpceConfigurationsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=vpceConfigurations", elemType: shared.VpceConfiguration })
  vpceConfigurations?: VpceConfiguration[];
}
