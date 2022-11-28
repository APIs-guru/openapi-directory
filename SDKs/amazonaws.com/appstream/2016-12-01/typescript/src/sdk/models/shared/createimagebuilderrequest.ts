import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccessEndpoint } from "./accessendpoint";
import { DomainJoinInfo } from "./domainjoininfo";
import { VpcConfig } from "./vpcconfig";



export class CreateImageBuilderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccessEndpoints", elemType: AccessEndpoint })
  accessEndpoints?: AccessEndpoint[];

  @SpeakeasyMetadata({ data: "json, name=AppstreamAgentVersion" })
  appstreamAgentVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=DisplayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=DomainJoinInfo" })
  domainJoinInfo?: DomainJoinInfo;

  @SpeakeasyMetadata({ data: "json, name=EnableDefaultInternetAccess" })
  enableDefaultInternetAccess?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IamRoleArn" })
  iamRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ImageArn" })
  imageArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ImageName" })
  imageName?: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceType" })
  instanceType: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=VpcConfig" })
  vpcConfig?: VpcConfig;
}
