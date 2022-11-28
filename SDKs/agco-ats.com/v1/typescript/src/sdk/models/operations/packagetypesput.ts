import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PackageTypesPutPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ID" })
  id: string;
}


export class PackageTypesPutRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  updateSystemModelsPackageType?: shared.UpdateSystemModelsPackageType;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  updateSystemModelsPackageType1?: shared.UpdateSystemModelsPackageType;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  updateSystemModelsPackageType2?: shared.UpdateSystemModelsPackageType;
}


export class PackageTypesPutRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PackageTypesPutPathParams;

  @SpeakeasyMetadata()
  request: PackageTypesPutRequests;
}


export class PackageTypesPutResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
