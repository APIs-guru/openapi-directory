import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProviderDescription } from "./providerdescription";



export class ListIdentityProvidersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Providers", elemType: ProviderDescription })
  providers: ProviderDescription[];
}
