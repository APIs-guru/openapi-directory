import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PriorityPackagesGetPriorityPackagePathParams extends SpeakeasyBase {
    id: string;
}
export declare class PriorityPackagesGetPriorityPackageRequest extends SpeakeasyBase {
    pathParams: PriorityPackagesGetPriorityPackagePathParams;
}
export declare class PriorityPackagesGetPriorityPackageResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    updateSystemModelsPriorityPackage?: shared.UpdateSystemModelsPriorityPackage;
}
