import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CustomDomainConfigType
/** 
 * The configuration for a custom domain that hosts the sign-up and sign-in webpages for your application.
**/
export class CustomDomainConfigType extends SpeakeasyBase {
  @Metadata({ data: "json, name=CertificateArn" })
  certificateArn: string;
}
