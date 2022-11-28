import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeCertificatesQueryParams extends SpeakeasyBase {
    marker?: string;
    maxRecords?: string;
}
export declare enum DescribeCertificatesXAmzTargetEnum {
    AmazonDmSv20160101DescribeCertificates = "AmazonDMSv20160101.DescribeCertificates"
}
export declare class DescribeCertificatesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeCertificatesXAmzTargetEnum;
}
export declare class DescribeCertificatesRequest extends SpeakeasyBase {
    queryParams: DescribeCertificatesQueryParams;
    headers: DescribeCertificatesHeaders;
    request: shared.DescribeCertificatesMessage;
}
export declare class DescribeCertificatesResponse extends SpeakeasyBase {
    contentType: string;
    describeCertificatesResponse?: shared.DescribeCertificatesResponse;
    resourceNotFoundFault?: any;
    statusCode: number;
}
