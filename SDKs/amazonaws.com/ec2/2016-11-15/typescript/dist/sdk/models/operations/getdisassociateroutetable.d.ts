import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDisassociateRouteTableActionEnum {
    DisassociateRouteTable = "DisassociateRouteTable"
}
export declare enum GetDisassociateRouteTableVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDisassociateRouteTableQueryParams extends SpeakeasyBase {
    action: GetDisassociateRouteTableActionEnum;
    associationId: string;
    dryRun?: boolean;
    version: GetDisassociateRouteTableVersionEnum;
}
export declare class GetDisassociateRouteTableHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDisassociateRouteTableRequest extends SpeakeasyBase {
    queryParams: GetDisassociateRouteTableQueryParams;
    headers: GetDisassociateRouteTableHeaders;
}
export declare class GetDisassociateRouteTableResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
