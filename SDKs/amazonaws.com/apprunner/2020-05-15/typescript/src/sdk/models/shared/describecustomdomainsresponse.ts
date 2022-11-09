import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CustomDomain } from "./customdomain";


export class DescribeCustomDomainsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CustomDomains", elemType: shared.CustomDomain })
  customDomains: CustomDomain[];

  @Metadata({ data: "json, name=DNSTarget" })
  dnsTarget: string;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ServiceArn" })
  serviceArn: string;
}
