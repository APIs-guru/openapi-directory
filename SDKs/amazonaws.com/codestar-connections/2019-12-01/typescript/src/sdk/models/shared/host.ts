import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProviderTypeEnum } from "./providertypeenum";
import { VpcConfiguration } from "./vpcconfiguration";



// Host
/** 
 * <p>A resource that represents the infrastructure where a third-party provider is installed. The host is used when you create connections to an installed third-party provider type, such as GitHub Enterprise Server. You create one host for all connections to that provider.</p> <note> <p>A host created through the CLI or the SDK is in `PENDING` status by default. You can make its status `AVAILABLE` by setting up the host in the console.</p> </note>
**/
export class Host extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HostArn" })
  hostArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ProviderEndpoint" })
  providerEndpoint?: string;

  @SpeakeasyMetadata({ data: "json, name=ProviderType" })
  providerType?: ProviderTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=StatusMessage" })
  statusMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=VpcConfiguration" })
  vpcConfiguration?: VpcConfiguration;
}
