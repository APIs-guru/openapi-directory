import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AuthenticationIsAliveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
