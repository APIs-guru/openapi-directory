import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PriorityPackagesPostPriorityPackagesRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  updateSystemModelsPriorityPackage?: shared.UpdateSystemModelsPriorityPackage;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  updateSystemModelsPriorityPackage1?: shared.UpdateSystemModelsPriorityPackage;

  @Metadata({ data: "request, media_type=text/json" })
  updateSystemModelsPriorityPackage2?: shared.UpdateSystemModelsPriorityPackage;
}


export class PriorityPackagesPostPriorityPackagesRequest extends SpeakeasyBase {
  @Metadata()
  request: PriorityPackagesPostPriorityPackagesRequests;
}


export class PriorityPackagesPostPriorityPackagesResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  priorityPackagesPostPriorityPackages200ApplicationJsonString?: string;

  @Metadata()
  priorityPackagesPostPriorityPackages200ApplicationXmlString?: string;

  @Metadata()
  priorityPackagesPostPriorityPackages200TextJsonString?: string;

  @Metadata()
  priorityPackagesPostPriorityPackages200TextXmlString?: string;

  @Metadata()
  statusCode: number;
}
