import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AccessEndpoint } from "./accessendpoint";
import { DomainJoinInfo } from "./domainjoininfo";
import { VpcConfig } from "./vpcconfig";


export class CreateImageBuilderRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccessEndpoints", elemType: shared.AccessEndpoint })
  accessEndpoints?: AccessEndpoint[];

  @Metadata({ data: "json, name=AppstreamAgentVersion" })
  appstreamAgentVersion?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=DisplayName" })
  displayName?: string;

  @Metadata({ data: "json, name=DomainJoinInfo" })
  domainJoinInfo?: DomainJoinInfo;

  @Metadata({ data: "json, name=EnableDefaultInternetAccess" })
  enableDefaultInternetAccess?: boolean;

  @Metadata({ data: "json, name=IamRoleArn" })
  iamRoleArn?: string;

  @Metadata({ data: "json, name=ImageArn" })
  imageArn?: string;

  @Metadata({ data: "json, name=ImageName" })
  imageName?: string;

  @Metadata({ data: "json, name=InstanceType" })
  instanceType: string;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=VpcConfig" })
  vpcConfig?: VpcConfig;
}
