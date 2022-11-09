import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum AssociateMacSecKeyXAmzTargetEnum {
    OvertureServiceAssociateMacSecKey = "OvertureService.AssociateMacSecKey"
}


export class AssociateMacSecKeyHeaders extends SpeakeasyBase {
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
  xAmzTarget: AssociateMacSecKeyXAmzTargetEnum;
}


export class AssociateMacSecKeyRequest extends SpeakeasyBase {
  @Metadata()
  headers: AssociateMacSecKeyHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AssociateMacSecKeyRequest;
}


export class AssociateMacSecKeyResponse extends SpeakeasyBase {
  @Metadata()
  associateMacSecKeyResponse?: shared.AssociateMacSecKeyResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  directConnectClientException?: any;

  @Metadata()
  directConnectServerException?: any;

  @Metadata()
  statusCode: number;
}
