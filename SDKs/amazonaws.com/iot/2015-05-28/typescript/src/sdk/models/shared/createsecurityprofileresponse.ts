import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateSecurityProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=securityProfileArn" })
  securityProfileArn?: string;

  @SpeakeasyMetadata({ data: "json, name=securityProfileName" })
  securityProfileName?: string;
}
