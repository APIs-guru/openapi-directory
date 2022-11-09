import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiV2PackageTypesIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ID" })
  id: string;
}


export class GetApiV2PackageTypesIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiV2PackageTypesIdPathParams;
}


export class GetApiV2PackageTypesIdResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateSystemModelsPackageType?: shared.UpdateSystemModelsPackageType;
}
