import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AccessEndpoint } from "./accessendpoint";
import { DomainJoinInfo } from "./domainjoininfo";
import { ResourceError } from "./resourceerror";
import { NetworkAccessConfiguration } from "./networkaccessconfiguration";
import { PlatformTypeEnum } from "./platformtypeenum";
import { ImageBuilderStateEnum } from "./imagebuilderstateenum";
import { ImageBuilderStateChangeReason } from "./imagebuilderstatechangereason";
import { VpcConfig } from "./vpcconfig";


// ImageBuilder
/** 
 * Describes a virtual machine that is used to create an image. 
**/
export class ImageBuilder extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccessEndpoints", elemType: shared.AccessEndpoint })
  accessEndpoints?: AccessEndpoint[];

  @Metadata({ data: "json, name=AppstreamAgentVersion" })
  appstreamAgentVersion?: string;

  @Metadata({ data: "json, name=Arn" })
  arn?: string;

  @Metadata({ data: "json, name=CreatedTime" })
  createdTime?: Date;

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

  @Metadata({ data: "json, name=ImageBuilderErrors", elemType: shared.ResourceError })
  imageBuilderErrors?: ResourceError[];

  @Metadata({ data: "json, name=InstanceType" })
  instanceType?: string;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=NetworkAccessConfiguration" })
  networkAccessConfiguration?: NetworkAccessConfiguration;

  @Metadata({ data: "json, name=Platform" })
  platform?: PlatformTypeEnum;

  @Metadata({ data: "json, name=State" })
  state?: ImageBuilderStateEnum;

  @Metadata({ data: "json, name=StateChangeReason" })
  stateChangeReason?: ImageBuilderStateChangeReason;

  @Metadata({ data: "json, name=VpcConfig" })
  vpcConfig?: VpcConfig;
}
