import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ImportSourceCredentialsXAmzTargetEnum {
    CodeBuild20161006ImportSourceCredentials = "CodeBuild_20161006.ImportSourceCredentials"
}


export class ImportSourceCredentialsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ImportSourceCredentialsXAmzTargetEnum;
}


export class ImportSourceCredentialsRequest extends SpeakeasyBase {
  @Metadata()
  headers: ImportSourceCredentialsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ImportSourceCredentialsInput;
}


export class ImportSourceCredentialsResponse extends SpeakeasyBase {
  @Metadata()
  accountLimitExceededException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  importSourceCredentialsOutput?: shared.ImportSourceCredentialsOutput;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  resourceAlreadyExistsException?: any;

  @Metadata()
  statusCode: number;
}
