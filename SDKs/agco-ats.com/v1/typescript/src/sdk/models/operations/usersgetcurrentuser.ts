import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UsersGetCurrentUserResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsUser?: shared.ApiModelsUser;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
