import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomDomainConfigType } from "./customdomainconfigtype";



export class CreateUserPoolDomainRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CustomDomainConfig" })
  customDomainConfig?: CustomDomainConfigType;

  @SpeakeasyMetadata({ data: "json, name=Domain" })
  domain: string;

  @SpeakeasyMetadata({ data: "json, name=UserPoolId" })
  userPoolId: string;
}
