import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteUserPoolDomainRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Domain" })
  domain: string;

  @Metadata({ data: "json, name=UserPoolId" })
  userPoolId: string;
}
