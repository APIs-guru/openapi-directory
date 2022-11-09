import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDisassociateTrunkInterfaceActionEnum {
    DisassociateTrunkInterface = "DisassociateTrunkInterface"
}
export declare enum PostDisassociateTrunkInterfaceVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDisassociateTrunkInterfaceQueryParams extends SpeakeasyBase {
    action: PostDisassociateTrunkInterfaceActionEnum;
    version: PostDisassociateTrunkInterfaceVersionEnum;
}
export declare class PostDisassociateTrunkInterfaceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDisassociateTrunkInterfaceRequest extends SpeakeasyBase {
    queryParams: PostDisassociateTrunkInterfaceQueryParams;
    headers: PostDisassociateTrunkInterfaceHeaders;
    request?: Uint8Array;
}
export declare class PostDisassociateTrunkInterfaceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
