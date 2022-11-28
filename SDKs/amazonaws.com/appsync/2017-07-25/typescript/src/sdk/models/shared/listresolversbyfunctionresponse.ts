import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Resolver } from "./resolver";



export class ListResolversByFunctionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=resolvers", elemType: Resolver })
  resolvers?: Resolver[];
}
