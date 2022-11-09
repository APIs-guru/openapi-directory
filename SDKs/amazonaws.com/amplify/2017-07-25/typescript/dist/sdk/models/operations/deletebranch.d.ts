import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeleteBranchPathParams extends SpeakeasyBase {
    appId: string;
    branchName: string;
}
export declare class DeleteBranchHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteBranchRequest extends SpeakeasyBase {
    pathParams: DeleteBranchPathParams;
    headers: DeleteBranchHeaders;
}
export declare class DeleteBranchResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    deleteBranchResult?: shared.DeleteBranchResult;
    dependentServiceFailureException?: any;
    internalFailureException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
