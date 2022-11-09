import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateSystemGetCheckinQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ClientID" })
  clientId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Preview" })
  preview: boolean;
}


export class UpdateSystemGetCheckinRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: UpdateSystemGetCheckinQueryParams;
}


export class UpdateSystemGetCheckinResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateSystemModelsCheckinResult?: shared.UpdateSystemModelsCheckinResult;
}
