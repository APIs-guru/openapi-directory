import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DisassociateFileSystemAliasesXAmzTargetEnum {
    AwsSimbaApiServiceV20180301DisassociateFileSystemAliases = "AWSSimbaAPIService_v20180301.DisassociateFileSystemAliases"
}
export declare class DisassociateFileSystemAliasesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisassociateFileSystemAliasesXAmzTargetEnum;
}
export declare class DisassociateFileSystemAliasesRequest extends SpeakeasyBase {
    headers: DisassociateFileSystemAliasesHeaders;
    request: shared.DisassociateFileSystemAliasesRequest;
}
export declare class DisassociateFileSystemAliasesResponse extends SpeakeasyBase {
    badRequest?: any;
    contentType: string;
    disassociateFileSystemAliasesResponse?: shared.DisassociateFileSystemAliasesResponse;
    fileSystemNotFound?: any;
    internalServerError?: any;
    statusCode: number;
}
