import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CidrAuthorizationContext } from "./cidrauthorizationcontext";



export class ProvisionByoipCidrRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Cidr" })
  cidr: string;

  @SpeakeasyMetadata({ data: "json, name=CidrAuthorizationContext" })
  cidrAuthorizationContext: CidrAuthorizationContext;
}
