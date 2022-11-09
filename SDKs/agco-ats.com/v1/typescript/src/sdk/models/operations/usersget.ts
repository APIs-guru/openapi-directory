import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UsersGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=email" })
  email?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=hasRole" })
  hasRole?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=username" })
  username?: string;
}


export class UsersGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: UsersGetQueryParams;
}


export class UsersGetResponse extends SpeakeasyBase {
  @Metadata()
  apiPagedResponseApiModelsUser?: shared.ApiPagedResponseApiModelsUser;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
