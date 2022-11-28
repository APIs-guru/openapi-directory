import { SpeakeasyBase } from "../../../internal/utils";
import { AccessEndpoint } from "./accessendpoint";
import { DomainJoinInfo } from "./domainjoininfo";
import { VpcConfig } from "./vpcconfig";
export declare class CreateImageBuilderRequest extends SpeakeasyBase {
    accessEndpoints?: AccessEndpoint[];
    appstreamAgentVersion?: string;
    description?: string;
    displayName?: string;
    domainJoinInfo?: DomainJoinInfo;
    enableDefaultInternetAccess?: boolean;
    iamRoleArn?: string;
    imageArn?: string;
    imageName?: string;
    instanceType: string;
    name: string;
    tags?: Map<string, string>;
    vpcConfig?: VpcConfig;
}
