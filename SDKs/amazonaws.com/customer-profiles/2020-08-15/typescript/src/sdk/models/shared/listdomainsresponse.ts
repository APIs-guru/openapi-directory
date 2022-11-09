import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ListDomainItem } from "./listdomainitem";


export class ListDomainsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Items", elemType: shared.ListDomainItem })
  items?: ListDomainItem[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
