import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiV2UsersIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetApiV2UsersIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiV2UsersIdPathParams;
}


export class GetApiV2UsersIdResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsUser?: shared.ApiModelsUser;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
