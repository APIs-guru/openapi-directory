import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AuthenticationIsAliveResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
