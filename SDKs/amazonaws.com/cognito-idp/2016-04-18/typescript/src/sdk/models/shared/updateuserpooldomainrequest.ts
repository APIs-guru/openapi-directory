import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CustomDomainConfigType } from "./customdomainconfigtype";


// UpdateUserPoolDomainRequest
/** 
 * The UpdateUserPoolDomain request input.
**/
export class UpdateUserPoolDomainRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CustomDomainConfig" })
  customDomainConfig: CustomDomainConfigType;

  @Metadata({ data: "json, name=Domain" })
  domain: string;

  @Metadata({ data: "json, name=UserPoolId" })
  userPoolId: string;
}
