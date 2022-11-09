import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Resolver } from "./resolver";


export class UpdateResolverResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=resolver" })
  resolver?: Resolver;
}
