import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PutJobSuccessResultXAmzTargetEnum {
    CodePipeline20150709PutJobSuccessResult = "CodePipeline_20150709.PutJobSuccessResult"
}


export class PutJobSuccessResultHeaders extends SpeakeasyBase {
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
  xAmzTarget: PutJobSuccessResultXAmzTargetEnum;
}


export class PutJobSuccessResultRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutJobSuccessResultHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PutJobSuccessResultInput;
}


export class PutJobSuccessResultResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidJobStateException?: any;

  @Metadata()
  jobNotFoundException?: any;

  @Metadata()
  outputVariablesSizeExceededException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
