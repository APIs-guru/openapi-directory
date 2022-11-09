import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DisassociateCustomDomainXAmzTargetEnum {
    AppRunnerDisassociateCustomDomain = "AppRunner.DisassociateCustomDomain"
}


export class DisassociateCustomDomainHeaders extends SpeakeasyBase {
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
  xAmzTarget: DisassociateCustomDomainXAmzTargetEnum;
}


export class DisassociateCustomDomainRequest extends SpeakeasyBase {
  @Metadata()
  headers: DisassociateCustomDomainHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DisassociateCustomDomainRequest;
}


export class DisassociateCustomDomainResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  disassociateCustomDomainResponse?: shared.DisassociateCustomDomainResponse;

  @Metadata()
  internalServiceErrorException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  invalidStateException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
