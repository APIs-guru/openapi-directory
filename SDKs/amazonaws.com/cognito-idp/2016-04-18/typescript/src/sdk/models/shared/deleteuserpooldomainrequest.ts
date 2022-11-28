import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteUserPoolDomainRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Domain" })
  domain: string;

  @SpeakeasyMetadata({ data: "json, name=UserPoolId" })
  userPoolId: string;
}
