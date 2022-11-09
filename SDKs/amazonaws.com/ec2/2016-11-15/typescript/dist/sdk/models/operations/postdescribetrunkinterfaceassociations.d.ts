import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeTrunkInterfaceAssociationsActionEnum {
    DescribeTrunkInterfaceAssociations = "DescribeTrunkInterfaceAssociations"
}
export declare enum PostDescribeTrunkInterfaceAssociationsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeTrunkInterfaceAssociationsQueryParams extends SpeakeasyBase {
    action: PostDescribeTrunkInterfaceAssociationsActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeTrunkInterfaceAssociationsVersionEnum;
}
export declare class PostDescribeTrunkInterfaceAssociationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeTrunkInterfaceAssociationsRequest extends SpeakeasyBase {
    queryParams: PostDescribeTrunkInterfaceAssociationsQueryParams;
    headers: PostDescribeTrunkInterfaceAssociationsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeTrunkInterfaceAssociationsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
