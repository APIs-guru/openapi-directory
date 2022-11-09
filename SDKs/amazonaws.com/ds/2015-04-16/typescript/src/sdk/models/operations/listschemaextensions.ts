import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListSchemaExtensionsXAmzTargetEnum {
    DirectoryService20150416ListSchemaExtensions = "DirectoryService_20150416.ListSchemaExtensions"
}


export class ListSchemaExtensionsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListSchemaExtensionsXAmzTargetEnum;
}


export class ListSchemaExtensionsRequest extends SpeakeasyBase {
  @Metadata()
  headers: ListSchemaExtensionsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListSchemaExtensionsRequest;
}


export class ListSchemaExtensionsResponse extends SpeakeasyBase {
  @Metadata()
  clientException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  entityDoesNotExistException?: any;

  @Metadata()
  invalidNextTokenException?: any;

  @Metadata()
  listSchemaExtensionsResult?: shared.ListSchemaExtensionsResult;

  @Metadata()
  serviceException?: any;

  @Metadata()
  statusCode: number;
}
