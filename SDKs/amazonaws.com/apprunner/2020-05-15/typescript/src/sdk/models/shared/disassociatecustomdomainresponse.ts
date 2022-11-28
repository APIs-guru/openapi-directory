import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomDomain } from "./customdomain";



export class DisassociateCustomDomainResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CustomDomain" })
  customDomain: CustomDomain;

  @SpeakeasyMetadata({ data: "json, name=DNSTarget" })
  dnsTarget: string;

  @SpeakeasyMetadata({ data: "json, name=ServiceArn" })
  serviceArn: string;
}
