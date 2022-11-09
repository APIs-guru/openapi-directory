import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteTargetHeaders extends SpeakeasyBase {
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


export class DeleteTargetRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ForceUnsubscribeAll" })
  forceUnsubscribeAll?: boolean;

  @Metadata({ data: "json, name=TargetAddress" })
  targetAddress: string;
}


export class DeleteTargetRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteTargetHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: DeleteTargetRequestBody;
}


export class DeleteTargetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteTargetResult?: Map<string, any>;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
