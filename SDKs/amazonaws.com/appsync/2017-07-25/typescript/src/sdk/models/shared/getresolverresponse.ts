import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Resolver } from "./resolver";


export class GetResolverResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=resolver" })
  resolver?: Resolver;
}
