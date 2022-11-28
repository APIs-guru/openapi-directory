import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateUserPoolDomainResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CloudFrontDomain" })
  cloudFrontDomain?: string;
}
