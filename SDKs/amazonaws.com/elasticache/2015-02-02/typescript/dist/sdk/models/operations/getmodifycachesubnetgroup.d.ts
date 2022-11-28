import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetModifyCacheSubnetGroupActionEnum {
    ModifyCacheSubnetGroup = "ModifyCacheSubnetGroup"
}
export declare enum GetModifyCacheSubnetGroupVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class GetModifyCacheSubnetGroupQueryParams extends SpeakeasyBase {
    action: GetModifyCacheSubnetGroupActionEnum;
    cacheSubnetGroupDescription?: string;
    cacheSubnetGroupName: string;
    subnetIds?: string[];
    version: GetModifyCacheSubnetGroupVersionEnum;
}
export declare class GetModifyCacheSubnetGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetModifyCacheSubnetGroupRequest extends SpeakeasyBase {
    queryParams: GetModifyCacheSubnetGroupQueryParams;
    headers: GetModifyCacheSubnetGroupHeaders;
}
export declare class GetModifyCacheSubnetGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
