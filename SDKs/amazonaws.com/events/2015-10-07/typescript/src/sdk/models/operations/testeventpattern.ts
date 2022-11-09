import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum TestEventPatternXAmzTargetEnum {
    AwsEventsTestEventPattern = "AWSEvents.TestEventPattern"
}


export class TestEventPatternHeaders extends SpeakeasyBase {
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
  xAmzTarget: TestEventPatternXAmzTargetEnum;
}


export class TestEventPatternRequest extends SpeakeasyBase {
  @Metadata()
  headers: TestEventPatternHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.TestEventPatternRequest;
}


export class TestEventPatternResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalException?: any;

  @Metadata()
  invalidEventPatternException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  testEventPatternResponse?: shared.TestEventPatternResponse;
}
