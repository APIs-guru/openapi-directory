import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PackageTypesPostRequests extends SpeakeasyBase {
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


export class PackageTypesPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: PackageTypesPostRequests;
}


export class PackageTypesPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  packageTypesPost200ApplicationJsonString?: string;

  @SpeakeasyMetadata()
  packageTypesPost200ApplicationXmlString?: string;

  @SpeakeasyMetadata()
  packageTypesPost200TextJsonString?: string;

  @SpeakeasyMetadata()
  packageTypesPost200TextXmlString?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
