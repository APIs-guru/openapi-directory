import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateSecurityProfileResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=securityProfileArn" })
  securityProfileArn?: string;

  @Metadata({ data: "json, name=securityProfileName" })
  securityProfileName?: string;
}
