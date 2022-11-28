import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetGenerateServiceLastAccessedDetailsActionEnum {
    GenerateServiceLastAccessedDetails = "GenerateServiceLastAccessedDetails"
}
export declare enum GetGenerateServiceLastAccessedDetailsGranularityEnum {
    ServiceLevel = "SERVICE_LEVEL",
    ActionLevel = "ACTION_LEVEL"
}
export declare enum GetGenerateServiceLastAccessedDetailsVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetGenerateServiceLastAccessedDetailsQueryParams extends SpeakeasyBase {
    action: GetGenerateServiceLastAccessedDetailsActionEnum;
    arn: string;
    granularity?: GetGenerateServiceLastAccessedDetailsGranularityEnum;
    version: GetGenerateServiceLastAccessedDetailsVersionEnum;
}
export declare class GetGenerateServiceLastAccessedDetailsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetGenerateServiceLastAccessedDetailsRequest extends SpeakeasyBase {
    queryParams: GetGenerateServiceLastAccessedDetailsQueryParams;
    headers: GetGenerateServiceLastAccessedDetailsHeaders;
}
export declare class GetGenerateServiceLastAccessedDetailsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
