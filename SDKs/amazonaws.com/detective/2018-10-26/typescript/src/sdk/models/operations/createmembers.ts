import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateMembersHeaders extends SpeakeasyBase {
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


export class CreateMembersRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Accounts", elemType: shared.Account })
  accounts: shared.Account[];

  @SpeakeasyMetadata({ data: "json, name=DisableEmailNotification" })
  disableEmailNotification?: boolean;

  @SpeakeasyMetadata({ data: "json, name=GraphArn" })
  graphArn: string;

  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;
}


export class CreateMembersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateMembersHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateMembersRequestBody;
}


export class CreateMembersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createMembersResponse?: shared.CreateMembersResponse;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  serviceQuotaExceededException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validationException?: any;
}
