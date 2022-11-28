import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDisassociateTrunkInterfaceActionEnum {
    DisassociateTrunkInterface = "DisassociateTrunkInterface"
}
export declare enum GetDisassociateTrunkInterfaceVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDisassociateTrunkInterfaceQueryParams extends SpeakeasyBase {
    action: GetDisassociateTrunkInterfaceActionEnum;
    associationId: string;
    clientToken?: string;
    dryRun?: boolean;
    version: GetDisassociateTrunkInterfaceVersionEnum;
}
export declare class GetDisassociateTrunkInterfaceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDisassociateTrunkInterfaceRequest extends SpeakeasyBase {
    queryParams: GetDisassociateTrunkInterfaceQueryParams;
    headers: GetDisassociateTrunkInterfaceHeaders;
}
export declare class GetDisassociateTrunkInterfaceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
