import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DomainDescriptionType } from "./domaindescriptiontype";


export class DescribeUserPoolDomainResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DomainDescription" })
  domainDescription?: DomainDescriptionType;
}
