import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateGroupsPostRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  updateSystemModelsUpdateGroup?: shared.UpdateSystemModelsUpdateGroup;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  updateSystemModelsUpdateGroup1?: shared.UpdateSystemModelsUpdateGroup;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  updateSystemModelsUpdateGroup2?: shared.UpdateSystemModelsUpdateGroup;
}


export class UpdateGroupsPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: UpdateGroupsPostRequests;
}


export class UpdateGroupsPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateGroupsPost200ApplicationJsonString?: string;

  @SpeakeasyMetadata()
  updateGroupsPost200ApplicationXmlString?: string;

  @SpeakeasyMetadata()
  updateGroupsPost200TextJsonString?: string;

  @SpeakeasyMetadata()
  updateGroupsPost200TextXmlString?: string;
}
