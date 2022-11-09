import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DomainName } from "./domainname";


export class GetDomainNamesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Items", elemType: shared.DomainName })
  items?: DomainName[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
