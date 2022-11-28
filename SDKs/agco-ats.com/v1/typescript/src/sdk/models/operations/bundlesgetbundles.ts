import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BundlesGetBundlesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=UpdateGroupID" })
  updateGroupId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class BundlesGetBundlesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: BundlesGetBundlesQueryParams;
}


export class BundlesGetBundlesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  apiPagedResponseUpdateSystemModelsBundle?: shared.ApiPagedResponseUpdateSystemModelsBundle;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
