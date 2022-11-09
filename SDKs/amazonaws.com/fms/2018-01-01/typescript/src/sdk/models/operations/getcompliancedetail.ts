import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetComplianceDetailXAmzTargetEnum {
    Awsfms20180101GetComplianceDetail = "AWSFMS_20180101.GetComplianceDetail"
}


export class GetComplianceDetailHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetComplianceDetailXAmzTargetEnum;
}


export class GetComplianceDetailRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetComplianceDetailHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetComplianceDetailRequest;
}


export class GetComplianceDetailResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getComplianceDetailResponse?: shared.GetComplianceDetailResponse;

  @Metadata()
  internalErrorException?: any;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  invalidOperationException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
