import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateAuthorizerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorizerArn" })
  authorizerArn?: string;

  @SpeakeasyMetadata({ data: "json, name=authorizerName" })
  authorizerName?: string;
}
