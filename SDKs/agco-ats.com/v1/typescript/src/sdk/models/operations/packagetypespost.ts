import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PackageTypesPostRequests extends SpeakeasyBase {
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


export class PackageTypesPostRequest extends SpeakeasyBase {
  @Metadata()
  request: PackageTypesPostRequests;
}


export class PackageTypesPostResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  packageTypesPost200ApplicationJsonString?: string;

  @Metadata()
  packageTypesPost200ApplicationXmlString?: string;

  @Metadata()
  packageTypesPost200TextJsonString?: string;

  @Metadata()
  packageTypesPost200TextXmlString?: string;

  @Metadata()
  statusCode: number;
}
