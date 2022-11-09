import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateGroupClientRelationshipsPostSubscriptionRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  updateSystemModelsUpdateGroupClientRelationship?: shared.UpdateSystemModelsUpdateGroupClientRelationship;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  updateSystemModelsUpdateGroupClientRelationship1?: shared.UpdateSystemModelsUpdateGroupClientRelationship;

  @Metadata({ data: "request, media_type=text/json" })
  updateSystemModelsUpdateGroupClientRelationship2?: shared.UpdateSystemModelsUpdateGroupClientRelationship;
}


export class UpdateGroupClientRelationshipsPostSubscriptionRequest extends SpeakeasyBase {
  @Metadata()
  request: UpdateGroupClientRelationshipsPostSubscriptionRequests;
}


export class UpdateGroupClientRelationshipsPostSubscriptionResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateGroupClientRelationshipsPostSubscription200ApplicationJsonString?: string;

  @Metadata()
  updateGroupClientRelationshipsPostSubscription200ApplicationXmlString?: string;

  @Metadata()
  updateGroupClientRelationshipsPostSubscription200TextJsonString?: string;

  @Metadata()
  updateGroupClientRelationshipsPostSubscription200TextXmlString?: string;
}
