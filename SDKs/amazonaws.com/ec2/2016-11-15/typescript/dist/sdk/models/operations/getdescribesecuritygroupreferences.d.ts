import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDescribeSecurityGroupReferencesActionEnum {
    DescribeSecurityGroupReferences = "DescribeSecurityGroupReferences"
}
export declare enum GetDescribeSecurityGroupReferencesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDescribeSecurityGroupReferencesQueryParams extends SpeakeasyBase {
    action: GetDescribeSecurityGroupReferencesActionEnum;
    dryRun?: boolean;
    groupId: string[];
    version: GetDescribeSecurityGroupReferencesVersionEnum;
}
export declare class GetDescribeSecurityGroupReferencesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeSecurityGroupReferencesRequest extends SpeakeasyBase {
    queryParams: GetDescribeSecurityGroupReferencesQueryParams;
    headers: GetDescribeSecurityGroupReferencesHeaders;
}
export declare class GetDescribeSecurityGroupReferencesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
