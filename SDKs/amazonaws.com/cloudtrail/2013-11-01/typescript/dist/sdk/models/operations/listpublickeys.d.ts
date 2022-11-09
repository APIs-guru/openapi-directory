import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListPublicKeysQueryParams extends SpeakeasyBase {
    nextToken?: string;
}
export declare enum ListPublicKeysXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101ListPublicKeys = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListPublicKeys"
}
export declare class ListPublicKeysHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListPublicKeysXAmzTargetEnum;
}
export declare class ListPublicKeysRequest extends SpeakeasyBase {
    queryParams: ListPublicKeysQueryParams;
    headers: ListPublicKeysHeaders;
    request: shared.ListPublicKeysRequest;
}
export declare class ListPublicKeysResponse extends SpeakeasyBase {
    contentType: string;
    invalidTimeRangeException?: any;
    invalidTokenException?: any;
    listPublicKeysResponse?: shared.ListPublicKeysResponse;
    operationNotPermittedException?: any;
    statusCode: number;
    unsupportedOperationException?: any;
}
