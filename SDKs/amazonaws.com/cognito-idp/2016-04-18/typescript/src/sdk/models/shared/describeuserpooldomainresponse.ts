import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DomainDescriptionType } from "./domaindescriptiontype";



export class DescribeUserPoolDomainResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DomainDescription" })
  domainDescription?: DomainDescriptionType;
}
