import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetTestFailoverActionEnum {
    TestFailover = "TestFailover"
}
export declare enum GetTestFailoverVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class GetTestFailoverQueryParams extends SpeakeasyBase {
    action: GetTestFailoverActionEnum;
    nodeGroupId: string;
    replicationGroupId: string;
    version: GetTestFailoverVersionEnum;
}
export declare class GetTestFailoverHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetTestFailoverRequest extends SpeakeasyBase {
    queryParams: GetTestFailoverQueryParams;
    headers: GetTestFailoverHeaders;
}
export declare class GetTestFailoverResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
