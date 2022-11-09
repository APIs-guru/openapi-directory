import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Resolver } from "./resolver";


export class ListResolversByFunctionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=resolvers", elemType: shared.Resolver })
  resolvers?: Resolver[];
}
