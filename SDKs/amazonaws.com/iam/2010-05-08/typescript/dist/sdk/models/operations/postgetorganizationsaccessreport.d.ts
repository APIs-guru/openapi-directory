import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostGetOrganizationsAccessReportActionEnum {
    GetOrganizationsAccessReport = "GetOrganizationsAccessReport"
}
export declare enum PostGetOrganizationsAccessReportVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostGetOrganizationsAccessReportQueryParams extends SpeakeasyBase {
    action: PostGetOrganizationsAccessReportActionEnum;
    version: PostGetOrganizationsAccessReportVersionEnum;
}
export declare class PostGetOrganizationsAccessReportHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostGetOrganizationsAccessReportRequest extends SpeakeasyBase {
    queryParams: PostGetOrganizationsAccessReportQueryParams;
    headers: PostGetOrganizationsAccessReportHeaders;
    request?: Uint8Array;
}
export declare class PostGetOrganizationsAccessReportResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
