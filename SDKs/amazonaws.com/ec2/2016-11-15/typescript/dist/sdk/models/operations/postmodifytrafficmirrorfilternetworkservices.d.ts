import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostModifyTrafficMirrorFilterNetworkServicesActionEnum {
    ModifyTrafficMirrorFilterNetworkServices = "ModifyTrafficMirrorFilterNetworkServices"
}
export declare enum PostModifyTrafficMirrorFilterNetworkServicesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostModifyTrafficMirrorFilterNetworkServicesQueryParams extends SpeakeasyBase {
    action: PostModifyTrafficMirrorFilterNetworkServicesActionEnum;
    version: PostModifyTrafficMirrorFilterNetworkServicesVersionEnum;
}
export declare class PostModifyTrafficMirrorFilterNetworkServicesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyTrafficMirrorFilterNetworkServicesRequest extends SpeakeasyBase {
    queryParams: PostModifyTrafficMirrorFilterNetworkServicesQueryParams;
    headers: PostModifyTrafficMirrorFilterNetworkServicesHeaders;
    request?: Uint8Array;
}
export declare class PostModifyTrafficMirrorFilterNetworkServicesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
