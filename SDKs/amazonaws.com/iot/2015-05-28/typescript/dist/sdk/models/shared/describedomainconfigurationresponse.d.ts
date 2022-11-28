import { SpeakeasyBase } from "../../../internal/utils";
import { AuthorizerConfig } from "./authorizerconfig";
import { DomainConfigurationStatusEnum } from "./domainconfigurationstatusenum";
import { DomainTypeEnum } from "./domaintypeenum";
import { ServerCertificateSummary } from "./servercertificatesummary";
import { ServiceTypeEnum } from "./servicetypeenum";
export declare class DescribeDomainConfigurationResponse extends SpeakeasyBase {
    authorizerConfig?: AuthorizerConfig;
    domainConfigurationArn?: string;
    domainConfigurationName?: string;
    domainConfigurationStatus?: DomainConfigurationStatusEnum;
    domainName?: string;
    domainType?: DomainTypeEnum;
    lastStatusChangeDate?: Date;
    serverCertificates?: ServerCertificateSummary[];
    serviceType?: ServiceTypeEnum;
}
