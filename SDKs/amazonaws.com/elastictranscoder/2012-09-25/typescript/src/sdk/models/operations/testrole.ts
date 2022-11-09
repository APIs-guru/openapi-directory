import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TestRoleHeaders extends SpeakeasyBase {
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
}


export class TestRoleRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=InputBucket" })
  inputBucket: string;

  @Metadata({ data: "json, name=OutputBucket" })
  outputBucket: string;

  @Metadata({ data: "json, name=Role" })
  role: string;

  @Metadata({ data: "json, name=Topics" })
  topics: string[];
}


export class TestRoleRequest extends SpeakeasyBase {
  @Metadata()
  headers: TestRoleHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: TestRoleRequestBody;
}


export class TestRoleResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  incompatibleVersionException?: any;

  @Metadata()
  internalServiceException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  testRoleResponse?: shared.TestRoleResponse;

  @Metadata()
  validationException?: any;
}
