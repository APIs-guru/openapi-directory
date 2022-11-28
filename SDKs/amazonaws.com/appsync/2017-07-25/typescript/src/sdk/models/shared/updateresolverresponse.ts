import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Resolver } from "./resolver";



export class UpdateResolverResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resolver" })
  resolver?: Resolver;
}
