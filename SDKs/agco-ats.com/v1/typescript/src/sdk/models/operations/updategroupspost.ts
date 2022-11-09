import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateGroupsPostRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  updateSystemModelsUpdateGroup?: shared.UpdateSystemModelsUpdateGroup;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  updateSystemModelsUpdateGroup1?: shared.UpdateSystemModelsUpdateGroup;

  @Metadata({ data: "request, media_type=text/json" })
  updateSystemModelsUpdateGroup2?: shared.UpdateSystemModelsUpdateGroup;
}


export class UpdateGroupsPostRequest extends SpeakeasyBase {
  @Metadata()
  request: UpdateGroupsPostRequests;
}


export class UpdateGroupsPostResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateGroupsPost200ApplicationJsonString?: string;

  @Metadata()
  updateGroupsPost200ApplicationXmlString?: string;

  @Metadata()
  updateGroupsPost200TextJsonString?: string;

  @Metadata()
  updateGroupsPost200TextXmlString?: string;
}
