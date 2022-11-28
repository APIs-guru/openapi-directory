import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostGetFlowLogsIntegrationTemplateActionEnum {
    GetFlowLogsIntegrationTemplate = "GetFlowLogsIntegrationTemplate"
}
export declare enum PostGetFlowLogsIntegrationTemplateVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostGetFlowLogsIntegrationTemplateQueryParams extends SpeakeasyBase {
    action: PostGetFlowLogsIntegrationTemplateActionEnum;
    version: PostGetFlowLogsIntegrationTemplateVersionEnum;
}
export declare class PostGetFlowLogsIntegrationTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostGetFlowLogsIntegrationTemplateRequest extends SpeakeasyBase {
    queryParams: PostGetFlowLogsIntegrationTemplateQueryParams;
    headers: PostGetFlowLogsIntegrationTemplateHeaders;
    request?: Uint8Array;
}
export declare class PostGetFlowLogsIntegrationTemplateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
