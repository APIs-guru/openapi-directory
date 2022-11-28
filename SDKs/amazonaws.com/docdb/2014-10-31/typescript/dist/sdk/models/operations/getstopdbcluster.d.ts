import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetStopDbClusterActionEnum {
    StopDbCluster = "StopDBCluster"
}
export declare enum GetStopDbClusterVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GetStopDbClusterQueryParams extends SpeakeasyBase {
    action: GetStopDbClusterActionEnum;
    dbClusterIdentifier: string;
    version: GetStopDbClusterVersionEnum;
}
export declare class GetStopDbClusterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetStopDbClusterRequest extends SpeakeasyBase {
    queryParams: GetStopDbClusterQueryParams;
    headers: GetStopDbClusterHeaders;
}
export declare class GetStopDbClusterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
