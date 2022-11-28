import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=AccessEndpoints", elemType: AccessEndpoint })
  accessEndpoints?: AccessEndpoint[];

  @SpeakeasyMetadata({ data: "json, name=AppstreamAgentVersion" })
  appstreamAgentVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedTime" })
  createdTime?: Date;

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

  @SpeakeasyMetadata({ data: "json, name=ImageBuilderErrors", elemType: ResourceError })
  imageBuilderErrors?: ResourceError[];

  @SpeakeasyMetadata({ data: "json, name=InstanceType" })
  instanceType?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=NetworkAccessConfiguration" })
  networkAccessConfiguration?: NetworkAccessConfiguration;

  @SpeakeasyMetadata({ data: "json, name=Platform" })
  platform?: PlatformTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: ImageBuilderStateEnum;

  @SpeakeasyMetadata({ data: "json, name=StateChangeReason" })
  stateChangeReason?: ImageBuilderStateChangeReason;

  @SpeakeasyMetadata({ data: "json, name=VpcConfig" })
  vpcConfig?: VpcConfig;
}
