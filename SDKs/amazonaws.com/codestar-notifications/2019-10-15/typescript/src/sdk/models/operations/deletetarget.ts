import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteTargetHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class DeleteTargetRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ForceUnsubscribeAll" })
  forceUnsubscribeAll?: boolean;

  @SpeakeasyMetadata({ data: "json, name=TargetAddress" })
  targetAddress: string;
}


export class DeleteTargetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: DeleteTargetHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: DeleteTargetRequestBody;
}


export class DeleteTargetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteTargetResult?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validationException?: any;
}
