import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeUserPoolDomainRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Domain" })
  domain: string;
}
