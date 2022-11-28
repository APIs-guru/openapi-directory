import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PriorityPackagesPostPriorityPackagesRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  updateSystemModelsPriorityPackage?: shared.UpdateSystemModelsPriorityPackage;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  updateSystemModelsPriorityPackage1?: shared.UpdateSystemModelsPriorityPackage;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  updateSystemModelsPriorityPackage2?: shared.UpdateSystemModelsPriorityPackage;
}


export class PriorityPackagesPostPriorityPackagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: PriorityPackagesPostPriorityPackagesRequests;
}


export class PriorityPackagesPostPriorityPackagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  priorityPackagesPostPriorityPackages200ApplicationJsonString?: string;

  @SpeakeasyMetadata()
  priorityPackagesPostPriorityPackages200ApplicationXmlString?: string;

  @SpeakeasyMetadata()
  priorityPackagesPostPriorityPackages200TextJsonString?: string;

  @SpeakeasyMetadata()
  priorityPackagesPostPriorityPackages200TextXmlString?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
