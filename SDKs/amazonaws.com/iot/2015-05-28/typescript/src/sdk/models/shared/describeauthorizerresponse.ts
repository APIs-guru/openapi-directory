import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuthorizerDescription } from "./authorizerdescription";



export class DescribeAuthorizerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorizerDescription" })
  authorizerDescription?: AuthorizerDescription;
}
