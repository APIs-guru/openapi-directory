import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AuthorizerDescription } from "./authorizerdescription";


export class DescribeDefaultAuthorizerResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorizerDescription" })
  authorizerDescription?: AuthorizerDescription;
}
