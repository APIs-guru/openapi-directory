import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ReportingCurrentPackagesInUpdateGroupSubscriptionTypeFilterEnum {
    RequiredOnly = "RequiredOnly",
    Default = "Default",
    All = "All"
}
export declare class ReportingCurrentPackagesInUpdateGroupQueryParams extends SpeakeasyBase {
    id: string;
    subscriptionTypeFilter?: ReportingCurrentPackagesInUpdateGroupSubscriptionTypeFilterEnum;
}
export declare class ReportingCurrentPackagesInUpdateGroupRequest extends SpeakeasyBase {
    queryParams: ReportingCurrentPackagesInUpdateGroupQueryParams;
}
export declare class ReportingCurrentPackagesInUpdateGroupResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    updateSystemModelsPackages?: shared.UpdateSystemModelsPackage[];
}
