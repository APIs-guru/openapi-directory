import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomDomainConfigType } from "./customdomainconfigtype";
import { DomainStatusTypeEnum } from "./domainstatustypeenum";



// DomainDescriptionType
/** 
 * A container for information about a domain.
**/
export class DomainDescriptionType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AWSAccountId" })
  awsAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=CloudFrontDistribution" })
  cloudFrontDistribution?: string;

  @SpeakeasyMetadata({ data: "json, name=CustomDomainConfig" })
  customDomainConfig?: CustomDomainConfigType;

  @SpeakeasyMetadata({ data: "json, name=Domain" })
  domain?: string;

  @SpeakeasyMetadata({ data: "json, name=S3Bucket" })
  s3Bucket?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: DomainStatusTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=UserPoolId" })
  userPoolId?: string;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version?: string;
}
