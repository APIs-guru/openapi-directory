import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Resolver } from "./resolver";



export class CreateResolverResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resolver" })
  resolver?: Resolver;
}
