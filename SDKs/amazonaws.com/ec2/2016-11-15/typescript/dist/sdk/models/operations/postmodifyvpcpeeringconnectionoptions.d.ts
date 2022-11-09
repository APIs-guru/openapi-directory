import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostModifyVpcPeeringConnectionOptionsActionEnum {
    ModifyVpcPeeringConnectionOptions = "ModifyVpcPeeringConnectionOptions"
}
export declare enum PostModifyVpcPeeringConnectionOptionsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostModifyVpcPeeringConnectionOptionsQueryParams extends SpeakeasyBase {
    action: PostModifyVpcPeeringConnectionOptionsActionEnum;
    version: PostModifyVpcPeeringConnectionOptionsVersionEnum;
}
export declare class PostModifyVpcPeeringConnectionOptionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyVpcPeeringConnectionOptionsRequest extends SpeakeasyBase {
    queryParams: PostModifyVpcPeeringConnectionOptionsQueryParams;
    headers: PostModifyVpcPeeringConnectionOptionsHeaders;
    request?: Uint8Array;
}
export declare class PostModifyVpcPeeringConnectionOptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
