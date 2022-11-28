import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateGroupClientRelationshipsPostSubscriptionRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  updateSystemModelsUpdateGroupClientRelationship?: shared.UpdateSystemModelsUpdateGroupClientRelationship;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  updateSystemModelsUpdateGroupClientRelationship1?: shared.UpdateSystemModelsUpdateGroupClientRelationship;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  updateSystemModelsUpdateGroupClientRelationship2?: shared.UpdateSystemModelsUpdateGroupClientRelationship;
}


export class UpdateGroupClientRelationshipsPostSubscriptionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: UpdateGroupClientRelationshipsPostSubscriptionRequests;
}


export class UpdateGroupClientRelationshipsPostSubscriptionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateGroupClientRelationshipsPostSubscription200ApplicationJsonString?: string;

  @SpeakeasyMetadata()
  updateGroupClientRelationshipsPostSubscription200ApplicationXmlString?: string;

  @SpeakeasyMetadata()
  updateGroupClientRelationshipsPostSubscription200TextJsonString?: string;

  @SpeakeasyMetadata()
  updateGroupClientRelationshipsPostSubscription200TextXmlString?: string;
}
