import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CustomDomain } from "./customdomain";


export class AssociateCustomDomainResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CustomDomain" })
  customDomain: CustomDomain;

  @Metadata({ data: "json, name=DNSTarget" })
  dnsTarget: string;

  @Metadata({ data: "json, name=ServiceArn" })
  serviceArn: string;
}
