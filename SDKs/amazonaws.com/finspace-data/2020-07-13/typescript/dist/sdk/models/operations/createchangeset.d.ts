import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateChangesetPathParams extends SpeakeasyBase {
    datasetId: string;
}
export declare class CreateChangesetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum CreateChangesetRequestBodyChangeTypeEnum {
    Replace = "REPLACE",
    Append = "APPEND",
    Modify = "MODIFY"
}
export declare enum CreateChangesetRequestBodyFormatTypeEnum {
    Csv = "CSV",
    Json = "JSON",
    Parquet = "PARQUET",
    Xml = "XML"
}
export declare enum CreateChangesetRequestBodySourceTypeEnum {
    S3 = "S3"
}
export declare class CreateChangesetRequestBody extends SpeakeasyBase {
    changeType: CreateChangesetRequestBodyChangeTypeEnum;
    formatParams?: Map<string, string>;
    formatType?: CreateChangesetRequestBodyFormatTypeEnum;
    sourceParams: Map<string, string>;
    sourceType: CreateChangesetRequestBodySourceTypeEnum;
    tags?: Map<string, string>;
}
export declare class CreateChangesetRequest extends SpeakeasyBase {
    pathParams: CreateChangesetPathParams;
    headers: CreateChangesetHeaders;
    request: CreateChangesetRequestBody;
}
export declare class CreateChangesetResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    createChangesetResponse?: shared.CreateChangesetResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
