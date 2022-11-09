import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostSetupBeneficiarySecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class PostSetupBeneficiarySecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class PostSetupBeneficiarySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PostSetupBeneficiarySecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PostSetupBeneficiarySecurityOption2;
}


export class PostSetupBeneficiaryRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: any;

  @Metadata()
  security: PostSetupBeneficiarySecurity;
}


export class PostSetupBeneficiaryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  serviceError?: any;

  @Metadata()
  setupBeneficiaryResponse?: any;

  @Metadata()
  statusCode: number;
}
