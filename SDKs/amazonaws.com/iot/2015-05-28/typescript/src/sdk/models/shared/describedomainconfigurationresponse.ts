import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AuthorizerConfig } from "./authorizerconfig";
import { DomainConfigurationStatusEnum } from "./domainconfigurationstatusenum";
import { DomainTypeEnum } from "./domaintypeenum";
import { ServerCertificateSummary } from "./servercertificatesummary";
import { ServiceTypeEnum } from "./servicetypeenum";


export class DescribeDomainConfigurationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorizerConfig" })
  authorizerConfig?: AuthorizerConfig;

  @Metadata({ data: "json, name=domainConfigurationArn" })
  domainConfigurationArn?: string;

  @Metadata({ data: "json, name=domainConfigurationName" })
  domainConfigurationName?: string;

  @Metadata({ data: "json, name=domainConfigurationStatus" })
  domainConfigurationStatus?: DomainConfigurationStatusEnum;

  @Metadata({ data: "json, name=domainName" })
  domainName?: string;

  @Metadata({ data: "json, name=domainType" })
  domainType?: DomainTypeEnum;

  @Metadata({ data: "json, name=lastStatusChangeDate" })
  lastStatusChangeDate?: Date;

  @Metadata({ data: "json, name=serverCertificates", elemType: shared.ServerCertificateSummary })
  serverCertificates?: ServerCertificateSummary[];

  @Metadata({ data: "json, name=serviceType" })
  serviceType?: ServiceTypeEnum;
}
