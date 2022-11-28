import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeRepositoryAssociationPathParams extends SpeakeasyBase {
    associationArn: string;
}
export declare class DescribeRepositoryAssociationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeRepositoryAssociationRequest extends SpeakeasyBase {
    pathParams: DescribeRepositoryAssociationPathParams;
    headers: DescribeRepositoryAssociationHeaders;
}
export declare class DescribeRepositoryAssociationResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    describeRepositoryAssociationResponse?: shared.DescribeRepositoryAssociationResponse;
    internalServerException?: any;
    notFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
