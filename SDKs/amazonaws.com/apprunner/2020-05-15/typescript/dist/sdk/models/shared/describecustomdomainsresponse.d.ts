import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CustomDomain } from "./customdomain";
export declare class DescribeCustomDomainsResponse extends SpeakeasyBase {
    customDomains: CustomDomain[];
    dnsTarget: string;
    nextToken?: string;
    serviceArn: string;
}
