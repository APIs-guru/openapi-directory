import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ImportApplicationUsageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Represents the Amazon Simple Storage Service (Amazon S3) location where usage data is read from.
**/
export declare class ImportApplicationUsageRequestBodySourceS3Location extends SpeakeasyBase {
    bucket?: string;
    key?: string;
    region?: shared.S3BucketRegionEnum;
}
export declare class ImportApplicationUsageRequestBody extends SpeakeasyBase {
    sourceS3Location: ImportApplicationUsageRequestBodySourceS3Location;
}
export declare class ImportApplicationUsageRequest extends SpeakeasyBase {
    headers: ImportApplicationUsageHeaders;
    request: ImportApplicationUsageRequestBody;
}
export declare class ImportApplicationUsageResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    importApplicationUsageResult?: shared.ImportApplicationUsageResult;
    internalServerException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
