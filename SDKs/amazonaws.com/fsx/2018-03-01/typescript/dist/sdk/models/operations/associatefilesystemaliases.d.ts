import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AssociateFileSystemAliasesXAmzTargetEnum {
    AwsSimbaApiServiceV20180301AssociateFileSystemAliases = "AWSSimbaAPIService_v20180301.AssociateFileSystemAliases"
}
export declare class AssociateFileSystemAliasesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateFileSystemAliasesXAmzTargetEnum;
}
export declare class AssociateFileSystemAliasesRequest extends SpeakeasyBase {
    headers: AssociateFileSystemAliasesHeaders;
    request: shared.AssociateFileSystemAliasesRequest;
}
export declare class AssociateFileSystemAliasesResponse extends SpeakeasyBase {
    associateFileSystemAliasesResponse?: shared.AssociateFileSystemAliasesResponse;
    badRequest?: any;
    contentType: string;
    fileSystemNotFound?: any;
    internalServerError?: any;
    statusCode: number;
}
