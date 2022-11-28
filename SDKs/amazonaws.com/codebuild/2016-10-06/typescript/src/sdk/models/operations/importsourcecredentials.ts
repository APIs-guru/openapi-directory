import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ImportSourceCredentialsXAmzTargetEnum {
    CodeBuild20161006ImportSourceCredentials = "CodeBuild_20161006.ImportSourceCredentials"
}


export class ImportSourceCredentialsHeaders extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: ImportSourceCredentialsXAmzTargetEnum;
}


export class ImportSourceCredentialsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: ImportSourceCredentialsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ImportSourceCredentialsInput;
}


export class ImportSourceCredentialsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accountLimitExceededException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  importSourceCredentialsOutput?: shared.ImportSourceCredentialsOutput;

  @SpeakeasyMetadata()
  invalidInputException?: any;

  @SpeakeasyMetadata()
  resourceAlreadyExistsException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
