import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeUserPoolDomainRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Domain" })
  domain: string;
}
