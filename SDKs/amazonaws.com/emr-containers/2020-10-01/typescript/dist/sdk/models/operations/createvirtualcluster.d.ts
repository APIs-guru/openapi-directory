import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateVirtualClusterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * The information about the container provider.
**/
export declare class CreateVirtualClusterRequestBodyContainerProvider extends SpeakeasyBase {
    id?: string;
    info?: shared.ContainerInfo;
    type?: shared.ContainerProviderTypeEnum;
}
export declare class CreateVirtualClusterRequestBody extends SpeakeasyBase {
    clientToken: string;
    containerProvider: CreateVirtualClusterRequestBodyContainerProvider;
    name: string;
    tags?: Map<string, string>;
}
export declare class CreateVirtualClusterRequest extends SpeakeasyBase {
    headers: CreateVirtualClusterHeaders;
    request: CreateVirtualClusterRequestBody;
}
export declare class CreateVirtualClusterResponse extends SpeakeasyBase {
    contentType: string;
    createVirtualClusterResponse?: shared.CreateVirtualClusterResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
