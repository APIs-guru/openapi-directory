import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PackageReportsDefaultPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ClientID" })
  clientId: string;
}


export class PackageReportsDefaultRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PackageReportsDefaultPathParams;
}


export class PackageReportsDefaultResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.UpdateSystemModelsPackageReport })
  updateSystemModelsPackageReports?: shared.UpdateSystemModelsPackageReport[];
}
