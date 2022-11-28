import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateFindingsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum UpdateFindingsRequestBodyStatusEnum {
    Active = "ACTIVE",
    Archived = "ARCHIVED"
}
export declare class UpdateFindingsRequestBody extends SpeakeasyBase {
    analyzerArn: string;
    clientToken?: string;
    ids?: string[];
    resourceArn?: string;
    status: UpdateFindingsRequestBodyStatusEnum;
}
export declare class UpdateFindingsRequest extends SpeakeasyBase {
    headers: UpdateFindingsHeaders;
    request: UpdateFindingsRequestBody;
}
export declare class UpdateFindingsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
