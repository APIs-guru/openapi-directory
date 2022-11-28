import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateGroupClientRelationshipsPutSubscriptionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=RelationshipID" })
  relationshipId: string;
}


export class UpdateGroupClientRelationshipsPutSubscriptionRequests extends SpeakeasyBase {
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


export class UpdateGroupClientRelationshipsPutSubscriptionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateGroupClientRelationshipsPutSubscriptionPathParams;

  @SpeakeasyMetadata()
  request: UpdateGroupClientRelationshipsPutSubscriptionRequests;
}


export class UpdateGroupClientRelationshipsPutSubscriptionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
