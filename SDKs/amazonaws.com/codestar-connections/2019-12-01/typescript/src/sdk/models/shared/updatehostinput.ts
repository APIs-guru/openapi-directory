import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VpcConfiguration } from "./vpcconfiguration";



export class UpdateHostInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HostArn" })
  hostArn: string;

  @SpeakeasyMetadata({ data: "json, name=ProviderEndpoint" })
  providerEndpoint?: string;

  @SpeakeasyMetadata({ data: "json, name=VpcConfiguration" })
  vpcConfiguration?: VpcConfiguration;
}
