import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PackageReportsDefaultPathParams extends SpeakeasyBase {
    clientId: string;
}
export declare class PackageReportsDefaultRequest extends SpeakeasyBase {
    pathParams: PackageReportsDefaultPathParams;
}
export declare class PackageReportsDefaultResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    updateSystemModelsPackageReports?: shared.UpdateSystemModelsPackageReport[];
}
