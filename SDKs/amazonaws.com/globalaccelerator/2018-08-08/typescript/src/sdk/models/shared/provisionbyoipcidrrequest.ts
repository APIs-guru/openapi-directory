import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CidrAuthorizationContext } from "./cidrauthorizationcontext";


export class ProvisionByoipCidrRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Cidr" })
  cidr: string;

  @Metadata({ data: "json, name=CidrAuthorizationContext" })
  cidrAuthorizationContext: CidrAuthorizationContext;
}
