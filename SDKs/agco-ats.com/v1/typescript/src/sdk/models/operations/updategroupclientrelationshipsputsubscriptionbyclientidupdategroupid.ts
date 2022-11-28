import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateGroupClientRelationshipsPutSubscriptionByClientIdUpdateGroupIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Active" })
  active: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ClientID" })
  clientId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=UpdateGroupID" })
  updateGroupId: string;
}


export class UpdateGroupClientRelationshipsPutSubscriptionByClientIdUpdateGroupIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: UpdateGroupClientRelationshipsPutSubscriptionByClientIdUpdateGroupIdQueryParams;
}


export class UpdateGroupClientRelationshipsPutSubscriptionByClientIdUpdateGroupIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
