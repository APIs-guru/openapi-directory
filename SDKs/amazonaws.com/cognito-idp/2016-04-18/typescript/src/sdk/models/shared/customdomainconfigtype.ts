import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CustomDomainConfigType
/** 
 * The configuration for a custom domain that hosts the sign-up and sign-in webpages for your application.
**/
export class CustomDomainConfigType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CertificateArn" })
  certificateArn: string;
}
