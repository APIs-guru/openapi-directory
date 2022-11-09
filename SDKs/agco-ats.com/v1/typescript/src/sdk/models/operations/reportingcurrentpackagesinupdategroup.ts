import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ReportingCurrentPackagesInUpdateGroupSubscriptionTypeFilterEnum {
    RequiredOnly = "RequiredOnly"
,    Default = "Default"
,    All = "All"
}


export class ReportingCurrentPackagesInUpdateGroupQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ID" })
  id: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SubscriptionTypeFilter" })
  subscriptionTypeFilter?: ReportingCurrentPackagesInUpdateGroupSubscriptionTypeFilterEnum;
}


export class ReportingCurrentPackagesInUpdateGroupRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ReportingCurrentPackagesInUpdateGroupQueryParams;
}


export class ReportingCurrentPackagesInUpdateGroupResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.UpdateSystemModelsPackage })
  updateSystemModelsPackages?: shared.UpdateSystemModelsPackage[];
}
