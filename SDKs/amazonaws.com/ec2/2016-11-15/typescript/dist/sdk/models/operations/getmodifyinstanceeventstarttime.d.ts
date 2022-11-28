import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetModifyInstanceEventStartTimeActionEnum {
    ModifyInstanceEventStartTime = "ModifyInstanceEventStartTime"
}
export declare enum GetModifyInstanceEventStartTimeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetModifyInstanceEventStartTimeQueryParams extends SpeakeasyBase {
    action: GetModifyInstanceEventStartTimeActionEnum;
    dryRun?: boolean;
    instanceEventId: string;
    instanceId: string;
    notBefore: Date;
    version: GetModifyInstanceEventStartTimeVersionEnum;
}
export declare class GetModifyInstanceEventStartTimeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetModifyInstanceEventStartTimeRequest extends SpeakeasyBase {
    queryParams: GetModifyInstanceEventStartTimeQueryParams;
    headers: GetModifyInstanceEventStartTimeHeaders;
}
export declare class GetModifyInstanceEventStartTimeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
