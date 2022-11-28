import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuthorizerConfig } from "./authorizerconfig";
import { DomainConfigurationStatusEnum } from "./domainconfigurationstatusenum";
import { DomainTypeEnum } from "./domaintypeenum";
import { ServerCertificateSummary } from "./servercertificatesummary";
import { ServiceTypeEnum } from "./servicetypeenum";



export class DescribeDomainConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorizerConfig" })
  authorizerConfig?: AuthorizerConfig;

  @SpeakeasyMetadata({ data: "json, name=domainConfigurationArn" })
  domainConfigurationArn?: string;

  @SpeakeasyMetadata({ data: "json, name=domainConfigurationName" })
  domainConfigurationName?: string;

  @SpeakeasyMetadata({ data: "json, name=domainConfigurationStatus" })
  domainConfigurationStatus?: DomainConfigurationStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=domainName" })
  domainName?: string;

  @SpeakeasyMetadata({ data: "json, name=domainType" })
  domainType?: DomainTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=lastStatusChangeDate" })
  lastStatusChangeDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=serverCertificates", elemType: ServerCertificateSummary })
  serverCertificates?: ServerCertificateSummary[];

  @SpeakeasyMetadata({ data: "json, name=serviceType" })
  serviceType?: ServiceTypeEnum;
}
