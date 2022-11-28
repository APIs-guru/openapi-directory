import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DomainName } from "./domainname";



export class GetDomainNamesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Items", elemType: DomainName })
  items?: DomainName[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
