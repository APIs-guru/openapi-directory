import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListImagesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListImagesXAmzTargetEnum {
    AmazonEc2ContainerRegistryV20150921ListImages = "AmazonEC2ContainerRegistry_V20150921.ListImages"
}
export declare class ListImagesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListImagesXAmzTargetEnum;
}
export declare class ListImagesRequest extends SpeakeasyBase {
    queryParams: ListImagesQueryParams;
    headers: ListImagesHeaders;
    request: shared.ListImagesRequest;
}
export declare class ListImagesResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterException?: any;
    listImagesResponse?: shared.ListImagesResponse;
    repositoryNotFoundException?: any;
    serverException?: any;
    statusCode: number;
}
