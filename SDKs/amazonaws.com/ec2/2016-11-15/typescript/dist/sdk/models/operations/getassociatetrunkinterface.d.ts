import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetAssociateTrunkInterfaceActionEnum {
    AssociateTrunkInterface = "AssociateTrunkInterface"
}
export declare enum GetAssociateTrunkInterfaceVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetAssociateTrunkInterfaceQueryParams extends SpeakeasyBase {
    action: GetAssociateTrunkInterfaceActionEnum;
    branchInterfaceId: string;
    clientToken?: string;
    dryRun?: boolean;
    greKey?: number;
    trunkInterfaceId: string;
    version: GetAssociateTrunkInterfaceVersionEnum;
    vlanId?: number;
}
export declare class GetAssociateTrunkInterfaceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAssociateTrunkInterfaceRequest extends SpeakeasyBase {
    queryParams: GetAssociateTrunkInterfaceQueryParams;
    headers: GetAssociateTrunkInterfaceHeaders;
}
export declare class GetAssociateTrunkInterfaceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
