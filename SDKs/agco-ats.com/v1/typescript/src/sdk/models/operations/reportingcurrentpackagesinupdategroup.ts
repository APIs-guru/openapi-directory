import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ReportingCurrentPackagesInUpdateGroupSubscriptionTypeFilterEnum {
    RequiredOnly = "RequiredOnly",
    Default = "Default",
    All = "All"
}


export class ReportingCurrentPackagesInUpdateGroupQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ID" })
  id: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SubscriptionTypeFilter" })
  subscriptionTypeFilter?: ReportingCurrentPackagesInUpdateGroupSubscriptionTypeFilterEnum;
}


export class ReportingCurrentPackagesInUpdateGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ReportingCurrentPackagesInUpdateGroupQueryParams;
}


export class ReportingCurrentPackagesInUpdateGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.UpdateSystemModelsPackage })
  updateSystemModelsPackages?: shared.UpdateSystemModelsPackage[];
}
