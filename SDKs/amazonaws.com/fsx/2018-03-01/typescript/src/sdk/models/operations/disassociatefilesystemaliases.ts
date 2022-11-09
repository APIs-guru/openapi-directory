import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DisassociateFileSystemAliasesXAmzTargetEnum {
    AwsSimbaApiServiceV20180301DisassociateFileSystemAliases = "AWSSimbaAPIService_v20180301.DisassociateFileSystemAliases"
}


export class DisassociateFileSystemAliasesHeaders extends SpeakeasyBase {
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
  xAmzTarget: DisassociateFileSystemAliasesXAmzTargetEnum;
}


export class DisassociateFileSystemAliasesRequest extends SpeakeasyBase {
  @Metadata()
  headers: DisassociateFileSystemAliasesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DisassociateFileSystemAliasesRequest;
}


export class DisassociateFileSystemAliasesResponse extends SpeakeasyBase {
  @Metadata()
  badRequest?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  disassociateFileSystemAliasesResponse?: shared.DisassociateFileSystemAliasesResponse;

  @Metadata()
  fileSystemNotFound?: any;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  statusCode: number;
}
