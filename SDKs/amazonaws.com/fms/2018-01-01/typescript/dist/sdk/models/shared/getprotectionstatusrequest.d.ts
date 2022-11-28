import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetProtectionStatusRequest extends SpeakeasyBase {
    endTime?: Date;
    maxResults?: number;
    memberAccountId?: string;
    nextToken?: string;
    policyId: string;
    startTime?: Date;
}
