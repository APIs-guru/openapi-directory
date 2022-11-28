import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateGroupClientRelationshipsGetSubscriptionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=RelationshipID" })
  relationshipId: string;
}


export class UpdateGroupClientRelationshipsGetSubscriptionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateGroupClientRelationshipsGetSubscriptionPathParams;
}


export class UpdateGroupClientRelationshipsGetSubscriptionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateSystemModelsUpdateGroupClientRelationship?: shared.UpdateSystemModelsUpdateGroupClientRelationship;
}
