import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAemHealthCheckQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=combineTagsOr" })
  combineTagsOr?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tags" })
  tags?: string;
}


export class GetAemHealthCheckRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAemHealthCheckQueryParams;
}


export class GetAemHealthCheckResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getAemHealthCheckDefaultApplicationJsonString?: string;
}
