import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AccessEndpoint } from "./accessendpoint";
import { DomainJoinInfo } from "./domainjoininfo";
import { ResourceError } from "./resourceerror";
import { NetworkAccessConfiguration } from "./networkaccessconfiguration";
import { PlatformTypeEnum } from "./platformtypeenum";
import { ImageBuilderStateEnum } from "./imagebuilderstateenum";
import { ImageBuilderStateChangeReason } from "./imagebuilderstatechangereason";
import { VpcConfig } from "./vpcconfig";
/**
 * Describes a virtual machine that is used to create an image.
**/
export declare class ImageBuilder extends SpeakeasyBase {
    accessEndpoints?: AccessEndpoint[];
    appstreamAgentVersion?: string;
    arn?: string;
    createdTime?: Date;
    description?: string;
    displayName?: string;
    domainJoinInfo?: DomainJoinInfo;
    enableDefaultInternetAccess?: boolean;
    iamRoleArn?: string;
    imageArn?: string;
    imageBuilderErrors?: ResourceError[];
    instanceType?: string;
    name: string;
    networkAccessConfiguration?: NetworkAccessConfiguration;
    platform?: PlatformTypeEnum;
    state?: ImageBuilderStateEnum;
    stateChangeReason?: ImageBuilderStateChangeReason;
    vpcConfig?: VpcConfig;
}
