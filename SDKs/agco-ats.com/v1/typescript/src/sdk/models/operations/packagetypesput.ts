import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PackageTypesPutPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ID" })
  id: string;
}


export class PackageTypesPutRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  updateSystemModelsPackageType?: shared.UpdateSystemModelsPackageType;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  updateSystemModelsPackageType1?: shared.UpdateSystemModelsPackageType;

  @Metadata({ data: "request, media_type=text/json" })
  updateSystemModelsPackageType2?: shared.UpdateSystemModelsPackageType;
}


export class PackageTypesPutRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PackageTypesPutPathParams;

  @Metadata()
  request: PackageTypesPutRequests;
}


export class PackageTypesPutResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
