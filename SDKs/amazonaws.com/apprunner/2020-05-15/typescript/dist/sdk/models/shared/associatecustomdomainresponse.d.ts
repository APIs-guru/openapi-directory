import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CustomDomain } from "./customdomain";
export declare class AssociateCustomDomainResponse extends SpeakeasyBase {
    customDomain: CustomDomain;
    dnsTarget: string;
    serviceArn: string;
}
