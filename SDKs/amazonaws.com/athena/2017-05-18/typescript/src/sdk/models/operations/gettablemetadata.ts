import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetTableMetadataXAmzTargetEnum {
    AmazonAthenaGetTableMetadata = "AmazonAthena.GetTableMetadata"
}


export class GetTableMetadataHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetTableMetadataXAmzTargetEnum;
}


export class GetTableMetadataRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetTableMetadataHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetTableMetadataInput;
}


export class GetTableMetadataResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getTableMetadataOutput?: shared.GetTableMetadataOutput;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  metadataException?: any;

  @Metadata()
  statusCode: number;
}
