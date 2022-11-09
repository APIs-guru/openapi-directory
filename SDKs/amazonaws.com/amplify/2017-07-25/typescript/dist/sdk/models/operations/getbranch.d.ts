import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetBranchPathParams extends SpeakeasyBase {
    appId: string;
    branchName: string;
}
export declare class GetBranchHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetBranchRequest extends SpeakeasyBase {
    pathParams: GetBranchPathParams;
    headers: GetBranchHeaders;
}
export declare class GetBranchResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getBranchResult?: shared.GetBranchResult;
    internalFailureException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
