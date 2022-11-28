import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAemHealthCheckQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=combineTagsOr" })
  combineTagsOr?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tags" })
  tags?: string;
}


export class GetAemHealthCheckRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAemHealthCheckQueryParams;
}


export class GetAemHealthCheckResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getAemHealthCheckDefaultApplicationJsonString?: string;
}
