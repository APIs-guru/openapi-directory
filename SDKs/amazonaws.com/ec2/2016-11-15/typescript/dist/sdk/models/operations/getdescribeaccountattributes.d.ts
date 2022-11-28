import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetDescribeAccountAttributesActionEnum {
    DescribeAccountAttributes = "DescribeAccountAttributes"
}
export declare enum GetDescribeAccountAttributesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDescribeAccountAttributesQueryParams extends SpeakeasyBase {
    action: GetDescribeAccountAttributesActionEnum;
    attributeName?: shared.AccountAttributeNameEnum[];
    dryRun?: boolean;
    version: GetDescribeAccountAttributesVersionEnum;
}
export declare class GetDescribeAccountAttributesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeAccountAttributesRequest extends SpeakeasyBase {
    queryParams: GetDescribeAccountAttributesQueryParams;
    headers: GetDescribeAccountAttributesHeaders;
}
export declare class GetDescribeAccountAttributesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
