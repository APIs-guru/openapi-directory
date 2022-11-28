import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PackagesGetPackagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ID" })
  id: string;
}


export class PackagesGetPackageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PackagesGetPackagePathParams;
}


export class PackagesGetPackageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateSystemModelsPackage?: shared.UpdateSystemModelsPackage;
}
