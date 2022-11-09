import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateDatasetPathParams extends SpeakeasyBase {
    datasetName: string;
}
export declare class UpdateDatasetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * How long, in days, message data is kept.
**/
export declare class UpdateDatasetRequestBodyRetentionPeriod extends SpeakeasyBase {
    numberOfDays?: number;
    unlimited?: boolean;
}
/**
 * Information about the versioning of dataset contents.
**/
export declare class UpdateDatasetRequestBodyVersioningConfiguration extends SpeakeasyBase {
    maxVersions?: number;
    unlimited?: boolean;
}
export declare class UpdateDatasetRequestBody extends SpeakeasyBase {
    actions: shared.DatasetAction[];
    contentDeliveryRules?: shared.DatasetContentDeliveryRule[];
    lateDataRules?: shared.LateDataRule[];
    retentionPeriod?: UpdateDatasetRequestBodyRetentionPeriod;
    triggers?: shared.DatasetTrigger[];
    versioningConfiguration?: UpdateDatasetRequestBodyVersioningConfiguration;
}
export declare class UpdateDatasetRequest extends SpeakeasyBase {
    pathParams: UpdateDatasetPathParams;
    headers: UpdateDatasetHeaders;
    request: UpdateDatasetRequestBody;
}
export declare class UpdateDatasetResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
