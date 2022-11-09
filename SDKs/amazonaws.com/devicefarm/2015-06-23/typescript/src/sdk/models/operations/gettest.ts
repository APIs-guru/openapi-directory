import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetTestXAmzTargetEnum {
    DeviceFarm20150623GetTest = "DeviceFarm_20150623.GetTest"
}


export class GetTestHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetTestXAmzTargetEnum;
}


export class GetTestRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetTestHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetTestRequest;
}


export class GetTestResponse extends SpeakeasyBase {
  @Metadata()
  argumentException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  getTestResult?: shared.GetTestResult;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  serviceAccountException?: any;

  @Metadata()
  statusCode: number;
}
