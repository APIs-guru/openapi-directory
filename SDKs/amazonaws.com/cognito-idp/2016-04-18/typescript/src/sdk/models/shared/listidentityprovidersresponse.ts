import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProviderDescription } from "./providerdescription";


export class ListIdentityProvidersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Providers", elemType: shared.ProviderDescription })
  providers: ProviderDescription[];
}
