import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomDomain } from "./customdomain";



export class DescribeCustomDomainsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CustomDomains", elemType: CustomDomain })
  customDomains: CustomDomain[];

  @SpeakeasyMetadata({ data: "json, name=DNSTarget" })
  dnsTarget: string;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ServiceArn" })
  serviceArn: string;
}
