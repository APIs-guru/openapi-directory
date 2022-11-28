import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeLocationObjectStorageXAmzTargetEnum {
    FmrsServiceDescribeLocationObjectStorage = "FmrsService.DescribeLocationObjectStorage"
}
export declare class DescribeLocationObjectStorageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeLocationObjectStorageXAmzTargetEnum;
}
export declare class DescribeLocationObjectStorageRequest extends SpeakeasyBase {
    headers: DescribeLocationObjectStorageHeaders;
    request: shared.DescribeLocationObjectStorageRequest;
}
export declare class DescribeLocationObjectStorageResponse extends SpeakeasyBase {
    contentType: string;
    describeLocationObjectStorageResponse?: shared.DescribeLocationObjectStorageResponse;
    internalException?: any;
    invalidRequestException?: any;
    statusCode: number;
}
