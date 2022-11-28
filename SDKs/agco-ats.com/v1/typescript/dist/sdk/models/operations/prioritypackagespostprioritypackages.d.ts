import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PriorityPackagesPostPriorityPackagesRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    textXml: Uint8Array;
    updateSystemModelsPriorityPackage?: shared.UpdateSystemModelsPriorityPackage;
    updateSystemModelsPriorityPackage1?: shared.UpdateSystemModelsPriorityPackage;
    updateSystemModelsPriorityPackage2?: shared.UpdateSystemModelsPriorityPackage;
}
export declare class PriorityPackagesPostPriorityPackagesRequest extends SpeakeasyBase {
    request: PriorityPackagesPostPriorityPackagesRequests;
}
export declare class PriorityPackagesPostPriorityPackagesResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentType: string;
    priorityPackagesPostPriorityPackages200ApplicationJsonString?: string;
    priorityPackagesPostPriorityPackages200ApplicationXmlString?: string;
    priorityPackagesPostPriorityPackages200TextJsonString?: string;
    priorityPackagesPostPriorityPackages200TextXmlString?: string;
    statusCode: number;
}
