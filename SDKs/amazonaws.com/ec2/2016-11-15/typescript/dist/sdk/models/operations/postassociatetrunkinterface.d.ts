import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostAssociateTrunkInterfaceActionEnum {
    AssociateTrunkInterface = "AssociateTrunkInterface"
}
export declare enum PostAssociateTrunkInterfaceVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostAssociateTrunkInterfaceQueryParams extends SpeakeasyBase {
    action: PostAssociateTrunkInterfaceActionEnum;
    version: PostAssociateTrunkInterfaceVersionEnum;
}
export declare class PostAssociateTrunkInterfaceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostAssociateTrunkInterfaceRequest extends SpeakeasyBase {
    queryParams: PostAssociateTrunkInterfaceQueryParams;
    headers: PostAssociateTrunkInterfaceHeaders;
    request?: Uint8Array;
}
export declare class PostAssociateTrunkInterfaceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
