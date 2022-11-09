import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VpcConfiguration } from "./vpcconfiguration";


export class UpdateHostInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=HostArn" })
  hostArn: string;

  @Metadata({ data: "json, name=ProviderEndpoint" })
  providerEndpoint?: string;

  @Metadata({ data: "json, name=VpcConfiguration" })
  vpcConfiguration?: VpcConfiguration;
}
