import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PriorityPackagesGetPriorityPackagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ID" })
  id: string;
}


export class PriorityPackagesGetPriorityPackageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PriorityPackagesGetPriorityPackagePathParams;
}


export class PriorityPackagesGetPriorityPackageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateSystemModelsPriorityPackage?: shared.UpdateSystemModelsPriorityPackage;
}
