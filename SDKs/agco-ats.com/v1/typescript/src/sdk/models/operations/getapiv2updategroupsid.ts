import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiV2UpdateGroupsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ID" })
  id: string;
}


export class GetApiV2UpdateGroupsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApiV2UpdateGroupsIdPathParams;
}


export class GetApiV2UpdateGroupsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateSystemModelsUpdateGroup?: shared.UpdateSystemModelsUpdateGroup;
}
