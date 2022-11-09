import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum AssociateFileSystemAliasesXAmzTargetEnum {
    AwsSimbaApiServiceV20180301AssociateFileSystemAliases = "AWSSimbaAPIService_v20180301.AssociateFileSystemAliases"
}


export class AssociateFileSystemAliasesHeaders extends SpeakeasyBase {
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
  xAmzTarget: AssociateFileSystemAliasesXAmzTargetEnum;
}


export class AssociateFileSystemAliasesRequest extends SpeakeasyBase {
  @Metadata()
  headers: AssociateFileSystemAliasesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AssociateFileSystemAliasesRequest;
}


export class AssociateFileSystemAliasesResponse extends SpeakeasyBase {
  @Metadata()
  associateFileSystemAliasesResponse?: shared.AssociateFileSystemAliasesResponse;

  @Metadata()
  badRequest?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  fileSystemNotFound?: any;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  statusCode: number;
}
