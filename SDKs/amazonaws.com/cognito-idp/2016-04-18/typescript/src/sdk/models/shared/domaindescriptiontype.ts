import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CustomDomainConfigType } from "./customdomainconfigtype";
import { DomainStatusTypeEnum } from "./domainstatustypeenum";


// DomainDescriptionType
/** 
 * A container for information about a domain.
**/
export class DomainDescriptionType extends SpeakeasyBase {
  @Metadata({ data: "json, name=AWSAccountId" })
  awsAccountId?: string;

  @Metadata({ data: "json, name=CloudFrontDistribution" })
  cloudFrontDistribution?: string;

  @Metadata({ data: "json, name=CustomDomainConfig" })
  customDomainConfig?: CustomDomainConfigType;

  @Metadata({ data: "json, name=Domain" })
  domain?: string;

  @Metadata({ data: "json, name=S3Bucket" })
  s3Bucket?: string;

  @Metadata({ data: "json, name=Status" })
  status?: DomainStatusTypeEnum;

  @Metadata({ data: "json, name=UserPoolId" })
  userPoolId?: string;

  @Metadata({ data: "json, name=Version" })
  version?: string;
}
