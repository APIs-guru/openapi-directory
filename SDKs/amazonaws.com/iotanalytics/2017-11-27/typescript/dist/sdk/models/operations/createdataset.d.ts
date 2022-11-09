import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateDatasetHeaders extends SpeakeasyBase {
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
export declare class CreateDatasetRequestBodyRetentionPeriod extends SpeakeasyBase {
    numberOfDays?: number;
    unlimited?: boolean;
}
/**
 * Information about the versioning of dataset contents.
**/
export declare class CreateDatasetRequestBodyVersioningConfiguration extends SpeakeasyBase {
    maxVersions?: number;
    unlimited?: boolean;
}
export declare class CreateDatasetRequestBody extends SpeakeasyBase {
    actions: shared.DatasetAction[];
    contentDeliveryRules?: shared.DatasetContentDeliveryRule[];
    datasetName: string;
    lateDataRules?: shared.LateDataRule[];
    retentionPeriod?: CreateDatasetRequestBodyRetentionPeriod;
    tags?: shared.Tag[];
    triggers?: shared.DatasetTrigger[];
    versioningConfiguration?: CreateDatasetRequestBodyVersioningConfiguration;
}
export declare class CreateDatasetRequest extends SpeakeasyBase {
    headers: CreateDatasetHeaders;
    request: CreateDatasetRequestBody;
}
export declare class CreateDatasetResponse extends SpeakeasyBase {
    contentType: string;
    createDatasetResponse?: shared.CreateDatasetResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    resourceAlreadyExistsException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
