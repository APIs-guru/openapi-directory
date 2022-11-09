import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PriorityPackagesGetPriorityPackagePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ID" })
  id: string;
}


export class PriorityPackagesGetPriorityPackageRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PriorityPackagesGetPriorityPackagePathParams;
}


export class PriorityPackagesGetPriorityPackageResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateSystemModelsPriorityPackage?: shared.UpdateSystemModelsPriorityPackage;
}
