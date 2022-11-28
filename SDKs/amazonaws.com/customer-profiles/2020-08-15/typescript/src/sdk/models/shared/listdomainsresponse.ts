import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ListDomainItem } from "./listdomainitem";



export class ListDomainsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Items", elemType: ListDomainItem })
  items?: ListDomainItem[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
