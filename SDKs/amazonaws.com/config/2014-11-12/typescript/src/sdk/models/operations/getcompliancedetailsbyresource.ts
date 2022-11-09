import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetComplianceDetailsByResourceQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum GetComplianceDetailsByResourceXAmzTargetEnum {
    StarlingDoveServiceGetComplianceDetailsByResource = "StarlingDoveService.GetComplianceDetailsByResource"
}


export class GetComplianceDetailsByResourceHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: GetComplianceDetailsByResourceXAmzTargetEnum;
}


export class GetComplianceDetailsByResourceRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetComplianceDetailsByResourceQueryParams;

  @Metadata()
  headers: GetComplianceDetailsByResourceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetComplianceDetailsByResourceRequest;
}


export class GetComplianceDetailsByResourceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getComplianceDetailsByResourceResponse?: shared.GetComplianceDetailsByResourceResponse;

  @Metadata()
  invalidParameterValueException?: any;

  @Metadata()
  statusCode: number;
}
