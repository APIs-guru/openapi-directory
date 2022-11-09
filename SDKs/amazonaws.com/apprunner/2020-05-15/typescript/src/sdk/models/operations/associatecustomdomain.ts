import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum AssociateCustomDomainXAmzTargetEnum {
    AppRunnerAssociateCustomDomain = "AppRunner.AssociateCustomDomain"
}


export class AssociateCustomDomainHeaders extends SpeakeasyBase {
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
  xAmzTarget: AssociateCustomDomainXAmzTargetEnum;
}


export class AssociateCustomDomainRequest extends SpeakeasyBase {
  @Metadata()
  headers: AssociateCustomDomainHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AssociateCustomDomainRequest;
}


export class AssociateCustomDomainResponse extends SpeakeasyBase {
  @Metadata()
  associateCustomDomainResponse?: shared.AssociateCustomDomainResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServiceErrorException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  invalidStateException?: any;

  @Metadata()
  statusCode: number;
}
