import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetSendCustomVerificationEmailActionEnum {
    SendCustomVerificationEmail = "SendCustomVerificationEmail"
}
export declare enum GetSendCustomVerificationEmailVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetSendCustomVerificationEmailQueryParams extends SpeakeasyBase {
    action: GetSendCustomVerificationEmailActionEnum;
    configurationSetName?: string;
    emailAddress: string;
    templateName: string;
    version: GetSendCustomVerificationEmailVersionEnum;
}
export declare class GetSendCustomVerificationEmailHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetSendCustomVerificationEmailRequest extends SpeakeasyBase {
    queryParams: GetSendCustomVerificationEmailQueryParams;
    headers: GetSendCustomVerificationEmailHeaders;
}
export declare class GetSendCustomVerificationEmailResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
