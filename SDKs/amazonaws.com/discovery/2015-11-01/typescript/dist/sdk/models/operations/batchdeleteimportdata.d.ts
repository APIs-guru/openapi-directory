import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum BatchDeleteImportDataXAmzTargetEnum {
    AwsPoseidonServiceV20151101BatchDeleteImportData = "AWSPoseidonService_V2015_11_01.BatchDeleteImportData"
}
export declare class BatchDeleteImportDataHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchDeleteImportDataXAmzTargetEnum;
}
export declare class BatchDeleteImportDataRequest extends SpeakeasyBase {
    headers: BatchDeleteImportDataHeaders;
    request: shared.BatchDeleteImportDataRequest;
}
export declare class BatchDeleteImportDataResponse extends SpeakeasyBase {
    authorizationErrorException?: any;
    batchDeleteImportDataResponse?: shared.BatchDeleteImportDataResponse;
    contentType: string;
    homeRegionNotSetException?: any;
    invalidParameterException?: any;
    invalidParameterValueException?: any;
    serverInternalErrorException?: any;
    statusCode: number;
}
