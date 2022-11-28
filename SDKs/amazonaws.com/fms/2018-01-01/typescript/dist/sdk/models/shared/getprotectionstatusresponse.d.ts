import { SpeakeasyBase } from "../../../internal/utils";
import { SecurityServiceTypeEnum } from "./securityservicetypeenum";
export declare class GetProtectionStatusResponse extends SpeakeasyBase {
    adminAccountId?: string;
    data?: string;
    nextToken?: string;
    serviceType?: SecurityServiceTypeEnum;
}
