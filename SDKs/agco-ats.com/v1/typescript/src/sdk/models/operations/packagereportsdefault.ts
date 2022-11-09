import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PackageReportsDefaultPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ClientID" })
  clientId: string;
}


export class PackageReportsDefaultRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PackageReportsDefaultPathParams;
}


export class PackageReportsDefaultResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.UpdateSystemModelsPackageReport })
  updateSystemModelsPackageReports?: shared.UpdateSystemModelsPackageReport[];
}
