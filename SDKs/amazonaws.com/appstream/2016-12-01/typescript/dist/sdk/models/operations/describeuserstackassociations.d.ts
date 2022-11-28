import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeUserStackAssociationsXAmzTargetEnum {
    PhotonAdminProxyServiceDescribeUserStackAssociations = "PhotonAdminProxyService.DescribeUserStackAssociations"
}
export declare class DescribeUserStackAssociationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeUserStackAssociationsXAmzTargetEnum;
}
export declare class DescribeUserStackAssociationsRequest extends SpeakeasyBase {
    headers: DescribeUserStackAssociationsHeaders;
    request: shared.DescribeUserStackAssociationsRequest;
}
export declare class DescribeUserStackAssociationsResponse extends SpeakeasyBase {
    contentType: string;
    describeUserStackAssociationsResult?: shared.DescribeUserStackAssociationsResult;
    invalidParameterCombinationException?: any;
    operationNotPermittedException?: any;
    statusCode: number;
}
