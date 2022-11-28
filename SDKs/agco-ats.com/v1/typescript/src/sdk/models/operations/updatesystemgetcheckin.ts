import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateSystemGetCheckinQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ClientID" })
  clientId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Preview" })
  preview: boolean;
}


export class UpdateSystemGetCheckinRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: UpdateSystemGetCheckinQueryParams;
}


export class UpdateSystemGetCheckinResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateSystemModelsCheckinResult?: shared.UpdateSystemModelsCheckinResult;
}
