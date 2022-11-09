import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiV2UpdateGroupsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ID" })
  id: string;
}


export class GetApiV2UpdateGroupsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiV2UpdateGroupsIdPathParams;
}


export class GetApiV2UpdateGroupsIdResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateSystemModelsUpdateGroup?: shared.UpdateSystemModelsUpdateGroup;
}
